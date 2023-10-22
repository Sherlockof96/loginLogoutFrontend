import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, res: NextResponse) {

    const response = NextResponse.next({ 
        request : { headers : req.headers},
    })

    if (req.cookies.has('x-redirect-url')) {
        console.log(req.cookies.get('x-redirect-url').value)

        response.cookies.set('x-go-to', req.cookies.get('x-redirect-url').value)
    }
    else {
        
        response.cookies.set('x-go-to', "https://kavishdoshi.com")
    }
    
    return response;
}

export const config = {
    matcher: ['/', '/signup', '/login'],
}
