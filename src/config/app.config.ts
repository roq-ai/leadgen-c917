interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: [],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Marketing Manager', 'Social Media Specialist'],
  tenantName: 'Organization',
  applicationName: 'LeadGen',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
