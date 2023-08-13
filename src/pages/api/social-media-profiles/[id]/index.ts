import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { socialMediaProfileValidationSchema } from 'validationSchema/social-media-profiles';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.social_media_profile
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSocialMediaProfileById();
    case 'PUT':
      return updateSocialMediaProfileById();
    case 'DELETE':
      return deleteSocialMediaProfileById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSocialMediaProfileById() {
    const data = await prisma.social_media_profile.findFirst(
      convertQueryToPrismaUtil(req.query, 'social_media_profile'),
    );
    return res.status(200).json(data);
  }

  async function updateSocialMediaProfileById() {
    await socialMediaProfileValidationSchema.validate(req.body);
    const data = await prisma.social_media_profile.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSocialMediaProfileById() {
    const data = await prisma.social_media_profile.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
