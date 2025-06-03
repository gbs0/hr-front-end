import { NextResponse } from 'next/server';
import { userSchema } from '@/app/lib/validations/user';
import db from '@/db/drizzle';
import { users } from '@/db/schema';
import { eq, desc, sql } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Busca o total de registros
    const totalCountResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(users);

    const totalCount = Number(totalCountResult[0].count);
    const totalPages = Math.ceil(totalCount / limit);

    // Busca os usuários com paginação e ordenação
    const allUsers = await db
      .select()
      .from(users)
      .orderBy(desc(users.id))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      users: allUsers,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        perPage: limit,
      }
    });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar usuários' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);

    const newUser = await db.insert(users).values(validatedData).returning();
    return NextResponse.json(newUser[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Erro ao criar usuário' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    const validatedData = userSchema.partial().parse(updateData);

    const updatedUser = await db
      .update(users)
      .set(validatedData)
      .where(eq(users.id, id))
      .returning();

    if (!updatedUser.length) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedUser[0]);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Erro ao atualizar usuário' },
      { status: 500 }
    );
  }
}
