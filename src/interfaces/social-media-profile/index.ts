import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SocialMediaProfileInterface {
  id?: string;
  name: string;
  platform: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface SocialMediaProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  platform?: string;
  organization_id?: string;
}
