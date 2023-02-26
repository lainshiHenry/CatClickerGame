export default class CookieController{
    _value: string = '';

    readCookies(cname: string){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        console.log(ca);
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    writeFormCookies({numOfDays, cookieId, cookieValue}: {numOfDays: number, cookieId: string, cookieValue: any}){
        const d = new Date();
        d.setTime(d.getTime() + (numOfDays * 24 * 60 * 60 * 1000));
        console.log(d.toUTCString());
        let expires = "expires="+d.toUTCString();
        document.cookie = cookieId + '=' + cookieValue + ';' + expires + ";path=/";
    }

    deleteCookies(){
        const d = new Date();

        this.writeFormCookies({numOfDays: 0, cookieId: 'userId', cookieValue: ''});
        this.writeFormCookies({numOfDays: 0, cookieId: 'userLoggedIn', cookieValue: false});
        this.writeFormCookies({ numOfDays: 14, cookieId: 'expires', cookieValue: d.toUTCString()});
        console.log('deleted');
    }

    checkCookies(){
        const cookiesUserLoggedIn = this.readCookies('userLoggedIn');
        const cookiesUserId = this.readCookies('userId');
        const cookiesExpired = this.readCookies('expires');
        const d = new Date();
        let isLoginSessionValid = false;

        if( cookiesUserLoggedIn ){
            if( Date.parse(d.toUTCString()) < Date.parse(cookiesExpired)) {
                isLoginSessionValid = true;
            }
        }
    
        return isLoginSessionValid;
    }
}