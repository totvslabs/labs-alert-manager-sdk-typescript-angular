export * from './channels.service';
import { ChannelsService } from './channels.service';
export * from './docs.service';
import { DocsService } from './docs.service';
export * from './events.service';
import { EventsService } from './events.service';
export * from './healthCheck.service';
import { HealthCheckService } from './healthCheck.service';
export * from './notifications.service';
import { NotificationsService } from './notifications.service';
export * from './policies.service';
import { PoliciesService } from './policies.service';
export * from './welcome.service';
import { WelcomeService } from './welcome.service';
export const APIS = [ChannelsService, DocsService, EventsService, HealthCheckService, NotificationsService, PoliciesService, WelcomeService];
