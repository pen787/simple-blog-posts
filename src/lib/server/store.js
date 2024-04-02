import { faker } from "@faker-js/faker";

let database = new Map()

/**
 * @param {{ topic: string; author: string; content: string; date: Date; }} data
 */
export function createNewPost(data) {
	database.set(
		crypto.randomUUID(),
		{
			topic: data.topic,
			author: data.author,
			content: data.content,
			date: data.date
		}
	)
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
		topic: faker.lorem.lines(1),
		author: faker.internet.userName(),
		content: faker.lorem.paragraphs(4),
		date: faker.date.anytime(),
	})
}