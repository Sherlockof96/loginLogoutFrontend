import { NextRequest, NextResponse } from 'next/server'
import Cookie from 'js-cookie'

export function middleware(req: NextRequest, res: NextResponse) {
    const response = NextResponse.next({ 
        request : { headers : req.headers},
    })

    if (req.cookies.has('x-redirect-url')) {
        Cookie.set('x-go-to', req.cookies.get('x-redirect-url').value, { expires: 1 })
        response.cookies.set('x-go-to', req.cookies.get('x-redirect-url').value)
    }
    else if (req.headers.has('x-redirect-url')) {
        Cookie.set('x-go-to', req.headers.get('x-redirect-url'), { expires: 1 })
        response.cookies.set('x-go-to', req.headers.get('x-redirect-url'))
    }
    else {
        Cookie.set('x-go-to', "https://kavishdoshi.com", { expires: 1 })
        response.cookies.set('x-go-to', "https://kavishdoshi.com")
    }
    
    return response;
}

export const config = {
    matcher: ['/', '/signup', '/login'],
}
