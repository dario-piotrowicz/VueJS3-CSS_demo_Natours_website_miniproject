export const createId = (minLength, maxLength) => {
    let id  = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = ( Math.random() * (maxLength + 1 - minLength) ) + minLength;
    for ( let i = 0; i < idLength; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}