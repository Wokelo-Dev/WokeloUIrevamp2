import { ReportModel } from '../models/report.model';

export const Api = {
	async searchResearchTopics(search: string) {
		try {
			const topics = [
				'future of mobility',
				'aliments',
				'agriculture',
				'health and fitness',
				'health and fitness 1',
				'health and fitness 2',
				'health and fitness 3',
				'health and fitness 4',
				'health and fitness 5',
				'health and fitness 6',
				'health and fitness 7',
				'health and fitness 8',
				'health and fitness 9',
				'health and fitness 10',
				'health and fitness 11',
				'health and fitness 12',
				'health and fitness 13',
				'health and fitness 14',
				'health and fitness 15',
				'habits',
				'technology',
				'gadgets',
				'chips manufacturing',
			];
			return topics.filter((t) => t.includes(search)) ?? [];
		} catch (err) {
			console.error(err);
			return [];
		}
	},
	async getResearchLinks(search: string) {
		try {
			const links = [
				{
					link: 'www.link.com',
					title: 'Link 1',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
						'attr 7',
						'attr 7',
						'attr 7',
						'attr 7',
					],
				},
				{
					link: 'www.link2.com',
					title: 'Link 2',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
						'attr 7',
					],
				},
				{
					link: 'www.link3.com',
					title: 'Link 3',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 4',
						'attr 4',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link4.com',
					title: 'Link 4',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link5.com',
					title: 'Link 5',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link6.com',
					title: 'Link 6',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link7.com',
					title: 'Link 7',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link8.com',
					title: 'Link 8',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link9.com',
					title: 'Link 9',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link10.com',
					title: 'Link 10',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link11.com',
					title: 'Link 11',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
				{
					link: 'www.link12.com',
					title: 'Link 12',
					attributes: [
						'attr 1',
						'attr 2',
						'attr 3',
						'attr 4',
						'attr 5',
						'attr 6',
						'attr 7',
					],
				},
			];
			return links;
		} catch (err) {
			console.error(err);
			return [];
		}
	},
};
