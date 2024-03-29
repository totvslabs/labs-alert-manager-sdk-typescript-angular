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


export interface PolicySchema { 
    /**
     * List of channel notification
     */
    channels: Array<string>;
    /**
     * Policy Client source
     */
    client_source: string;
    /**
     * Policy Client UUID
     */
    client_uuid: string;
    created_at?: string;
    /**
     * Policy deleted
     */
    deleted: boolean;
    /**
     * Policy enabled
     */
    enabled: boolean;
    /**
     * Policy filters
     */
    filters: object;
    /**
     * Enable alert frequency for the policy
     */
    frequency: boolean;
    /**
     * Quantity of alert interval time
     */
    frequency_minutes: number;
    /**
     * Quantity of alert occurrencies
     */
    frequency_occurrences: number;
    /**
     * Id
     */
    id: string;
    /**
     * Policy name
     */
    name: string;
    updated_at?: string;
}

