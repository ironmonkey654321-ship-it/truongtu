import { type CollectionEntry, getCollection } from 'astro:content';
import { TOPIC_COLORS } from '../consts';

export type Post = CollectionEntry<'blog'>;

/** Tat ca bai viet, moi nhat dung truoc. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** So phut doc, tinh tu noi dung that cua bai (khoang 200 chu moi phut). */
export function readingMinutes(post: Post): number {
	const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/** 'Đời sống' -> 'doi-song', dung lam neo tren trang Chu de. */
export function topicSlug(topic: string): string {
	return topic
		.toLowerCase()
		.replace(/đ/g, 'd')
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

export function topicColor(topic: string): string {
	if (TOPIC_COLORS[topic]) return TOPIC_COLORS[topic];
	let sum = 0;
	for (const ch of topic) sum += ch.codePointAt(0) ?? 0;
	return `t${(sum % 5) + 1}`;
}

export function topicHref(topic: string): string {
	return `/chu-de/#${topicSlug(topic)}`;
}

/** Danh sach chu de dang co bai, kem so bai, nhieu bai dung truoc. */
export function listTopics(posts: Post[]): { name: string; count: number }[] {
	const counts = new Map<string, number>();
	for (const post of posts) {
		const topic = post.data.topic;
		if (topic) counts.set(topic, (counts.get(topic) ?? 0) + 1);
	}
	return [...counts.entries()]
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'vi'));
}

// Ngay cua bai luon doc theo UTC de khong lech ngay giua may build va may xem.
const two = (n: number) => String(n).padStart(2, '0');

/** '12 tháng 11, 2026' */
export function longDate(date: Date): string {
	return `${date.getUTCDate()} tháng ${date.getUTCMonth() + 1}, ${date.getUTCFullYear()}`;
}

/** { day: '08', rest: 'Th11, 2026' } */
export function shortDate(date: Date): { day: string; rest: string } {
	return {
		day: two(date.getUTCDate()),
		rest: `Th${date.getUTCMonth() + 1}, ${date.getUTCFullYear()}`,
	};
}

export function isoDay(date: Date): string {
	return date.toISOString().slice(0, 10);
}
