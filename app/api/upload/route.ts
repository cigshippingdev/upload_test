import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: '파일이 없습니다' }, { status: 400 })
    }

    const blob = await put(file.name, file, {
      access: 'public',
    })

    return NextResponse.json({
      message: '업로드 성공',
      url: blob.url,
      filename: file.name
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: '업로드 실패' }, { status: 500 })
  }
}
