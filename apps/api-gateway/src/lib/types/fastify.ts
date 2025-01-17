import {
    FastifyRequest,
    FastifyReply,
    RequestParamsDefault,
    RequestBodyDefault,
    RequestQuerystringDefault
} from 'fastify';

export type RequestHandler<
    Body = RequestBodyDefault,
    Params = RequestParamsDefault
> = (
    req: FastifyRequest<{
        Body: Body,
        Params: Params,
        reqId: string,
    }>,
    res: FastifyReply
) => any
