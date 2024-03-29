/**
 * alertmanager
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface EventSchema { 
    /**
     * Event souce
     */
    client_source: string;
    /**
     * Client uuid. This is the id defined by client app
     */
    client_uuid: string;
    created_at?: string;
    /**
     * Event data
     */
    data: object;
    /**
     * Event type
     */
    event_type: string;
    /**
     * Id
     */
    id: string;
    /**
     * Event labels
     */
    labels: object;
    /**
     * Event schema version. Can be used by client app to know how to parse the event
     */
    schema_version: string;
    /**
     * Event severity
     */
    severity: string;
    /**
     * Event status, Received, Stored
     */
    status: string;
    updated_at?: string;
}

