import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取响应对象
  const response = NextResponse.next()
  
  // 添加 X-Robots-Tag header
  response.headers.set('X-Robots-Tag', 'index, follow')
  // 或者如果要禁止索引：
  // response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  
  return response
}

// 可选：配置哪些路径需要应用此 middleware
export const config = {
  matcher: '/:path*',  // 应用到所有路径
}
