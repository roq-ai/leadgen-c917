import axios from 'axios';
import queryString from 'query-string';
import { SocialMediaProfileInterface, SocialMediaProfileGetQueryInterface } from 'interfaces/social-media-profile';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSocialMediaProfiles = async (
  query?: SocialMediaProfileGetQueryInterface,
): Promise<PaginatedInterface<SocialMediaProfileInterface>> => {
  const response = await axios.get('/api/social-media-profiles', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSocialMediaProfile = async (socialMediaProfile: SocialMediaProfileInterface) => {
  const response = await axios.post('/api/social-media-profiles', socialMediaProfile);
  return response.data;
};

export const updateSocialMediaProfileById = async (id: string, socialMediaProfile: SocialMediaProfileInterface) => {
  const response = await axios.put(`/api/social-media-profiles/${id}`, socialMediaProfile);
  return response.data;
};

export const getSocialMediaProfileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/social-media-profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteSocialMediaProfileById = async (id: string) => {
  const response = await axios.delete(`/api/social-media-profiles/${id}`);
  return response.data;
};
