import { defineEndpoint } from '@directus/extensions-sdk';

export default defineEndpoint((router, {services, exceptions, database: knex, env}) => {
	
	const { ForbiddenException, InvalidPayloadException} = exceptions;
	router.post('/register', async (req, res, next) => {
		try {
			if(!req.accountability){
				return next(new Forbgi)
			}

		} catch (e) {
			console.log(e);
			res.sendStatus(500);
		}
	})
});
