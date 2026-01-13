import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// @Injectable()
// export class PrismaService extends PrismaClient {
//   constructor() {
//     super({
//       datasources: {
//         db: {
//           url: 'postgresql://postgres:123@localhost:5434/nest?schema=public',
//         },
//       },
//     });
//   }
// }

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString:
        'postgresql://postgres:123@localhost:5434/nest?schema=public',
    });
    super({ adapter });
  }
}
