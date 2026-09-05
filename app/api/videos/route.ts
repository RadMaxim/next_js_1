// app/api/videos/route.ts
import { NextResponse } from 'next/server'

export interface VideoInterface {
    link: string;
    id?: string;
    title?: string;
    createdAt?: string;
}

// Хранилище видео (временно, в памяти)
let videos: VideoInterface[] = []

export async function POST(req: Request) {
    try {
        const data: VideoInterface = await req.json()

        // Валидация
        if (!data.link || !data.link.trim()) {
            return NextResponse.json(
                { error: 'Ссылка на видео обязательна' },
                { status: 400 }
            )
        }

        // Добавляем ID и дату
        const newVideo = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            link: data.link.trim()
        }
        console.log(videos)
        return NextResponse.json(newVideo, { status: 201 })
    } catch (error) {
        console.error('❌ Ошибка POST:', error)
        return NextResponse.json(
            { error: 'Ошибка при добавлении видео' },
            { status: 500 }
        )
    }
}

export async function GET() {
    console.log('📥 GET запрос, видео:', videos.length)
    return NextResponse.json(videos)
}

// Опционально: DELETE для очистки
export async function DELETE() {
    videos = []
    console.log('🗑️ Все видео удалены')
    return NextResponse.json({ message: 'Все видео удалены' })
}