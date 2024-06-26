import { faker, fakerTH } from "@faker-js/faker";

let database = new Map()
export let adminDatabase = new Map()

/**
 * @param {{ topic: string; author: string; user: string; content: string; date: Date; }} data
 */
export function createNewPost(data) {
	database.set(
		crypto.randomUUID(),
		{
			topic: data.topic,
			author: data.author,
			user: data.user,
			content: data.content,
			date: data.date
		}
	)
}

/**
 * @param {any} uuid
 */
export function RemovePost(uuid) {
	database.delete(uuid)
}

/**
 * @param {string} topic
 */
export function getPost(topic) {
	return database.get(topic)
}

export function getAllPost() {
	/**
	 * @type {any[]}
	 */
	let posts = []
	database.forEach((value, key) => {
		value.id = key
		posts.push(value)
	})
	return posts
}

for (let i = 0; i < 10; i++) {
	createNewPost({
		topic: fakerTH.lorem.lines(1),
		author: fakerTH.person.fullName(),
		content: fakerTH.lorem.paragraphs(4),
		user: faker.string.uuid(),
		date: faker.date.anytime(),
	})
}