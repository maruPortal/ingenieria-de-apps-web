/**
 * meeting
 * aca
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: mariadelosangelesportal@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (tsType: Omit<Usuario, \'id\'>, schemaOptions: { title: \'NewUsuario\', exclude: [ \'id\' ] })
 */
export interface NewUsuario { 
  [key: string]: object | any;


    nombre?: string;
    apellido?: string;
    mail?: string;
    password?: string;
    eventos?: Array<object>;
}

