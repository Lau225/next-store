import { NextResponse,NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const auth = false
  if(!auth){
    return NextResponse.redirect(new URL(`${request.nextUrl.origin}/login`))
  }     
  return NextResponse.next();
}

export const config = {
  // 调整 matcher 配置以确保正确拦截所有 API 路径
  matcher: ["/api/:path*"],
};