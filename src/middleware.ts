import { NextRequest, NextResponse } from 'next/server'
import Cookie from 'js-cookie'

export function middleware(req: NextRequest, res: NextResponse) {
    console.log('middleware')
    console.log(req.url)
    const response = NextResponse.next({ 
        request : { headers : req.headers},
    })

    if (req.cookies.has('x-redirect-url')) {
        console.log(req.cookies.get('x-redirect-url').value)
        Cookie.set('x-redirect-url', req.cookies.get('x-redirect-url').value)
        response.cookies.set('x-go-to', req.cookies.get('x-redirect-url').value)
    }
    else {
        Cookie.set('x-redirect-url', "https://kavishdoshi.com")
        response.cookies.set('x-go-to', "https://kavishdoshi.com")
    }
    
    return response;
}

export const config = {
    matcher: ['/', '/signup', '/login'],
}
