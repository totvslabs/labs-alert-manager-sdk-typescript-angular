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


export interface NotificationSchema { 
    /**
     * Notification Client UUID
     */
    client_uuid: string;
    created_at?: string;
    /**
     * List of notification events
     */
    events?: Array<string> | null;
    first_event?: string | null;
    /**
     * Id
     */
    id: string;
    /**
     * Quantity notification retries
     */
    retries?: number | null;
    /**
     * Notification status
     */
    status: NotificationSchema.StatusEnum;
    updated_at?: string;
}
export namespace NotificationSchema {
    export type StatusEnum = 'Queued' | 'Processing' | 'Failed' | 'Success';
    export const StatusEnum = {
        Queued: 'Queued' as StatusEnum,
        Processing: 'Processing' as StatusEnum,
        Failed: 'Failed' as StatusEnum,
        Success: 'Success' as StatusEnum
    };
}


