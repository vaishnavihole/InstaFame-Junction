const allowedRole = (role) =>{
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if(user?.role === role){
        return true;
    }
    return false;
}

export default allowedRole;