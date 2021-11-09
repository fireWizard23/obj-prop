

/**
 * Not supposed to be used. A simple [key: string] : any object
 */
interface AnyObject {
    [key: string] : any;
}

/**
 * Checks if a given object have no property.
 * @param obj Object to check 
 * @returns Whether the {@link obj} has no properties i.e empty
 */
export function hasNoProperties(obj : Object) : boolean{
    for(const prop in obj) {
        return true;
    }
    return false;
}


/**
 * Deletes the given properties to the given object.
 * @param obj Object to delete the given {@link properties} from.
 * @param properties Properties to delete from the {@link obj}
 */
export function deleteProperties(obj : AnyObject, ...properties: string[]) : void {
    for(let i of properties) {
        delete obj[i];
    }
}


/**
 * Makes the given properties of the given {@link obj}, null. Use {@link clearProperties} to make them undefined.
 * @param obj Object to null the given {@link properties}.
 * @param properties Properties to be nulled from the {@link obj} given.
 */
export function nullProperties(obj : AnyObject, ...properties : string[]) : void {
    for(let i of properties) {
        obj[i] = null;
    }
}

/**
 * Makes the given properties of the given {@link obj}, undefined. Use {@link nullProperties} to make them null.
 * @param obj Object to clear the given {@link properties}.
 * @param properties Properties to be cleared from the {@link obj} given.
 */
export function clearProperties(obj : AnyObject, ...properties : string[]) : void {
    for(let i of properties) {
        obj[i] = undefined;
    }
}

