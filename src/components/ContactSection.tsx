'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const contactInfo = [
	{
		platform: 'Instagram',
		icon: '/assets/social_icons/insta.png',
		href: 'https://www.instagram.com/yogesh_ingale555?igsh=d2pwb3VnNWF3am54',
	},
	{
		platform: 'IMDB',
		icon: '/assets/social_icons/imdb.png',
		href: 'https://m.imdb.com/name/nm10772599/?fbclid=PAQ0xDSwKVCYVleHRuA2FlbQIxMQABpxb_dPKZElFvVly1lziZetr9RLcSy4v9UqAPqDU0Cmc51CQKnipX90evEBex_aem_g23UpE0J7mcEcotOUKKuOA',
	},
	{
		platform: 'Email',
		icon: '/assets/social_icons/Gmail.png',
		href: 'mailto:artyogeshingale@gmail.com',
	},
	{
		platform: 'WhatsApp',
		icon: '/assets/social_icons/whatsapp.png',
		href: 'https://web.whatsapp.com/send?phone=917040095551',
	},
];

export default function ContactSection() {
	return (
		<section id="contact" className="py-20 relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(255,20,147,0.05),rgba(65,105,225,0.05))]" />
			</div>

			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4">
						<span className="gradient-text">Let&apos;s Connect</span>
					</h2>
					<p className="text-white/70 max-w-xl mx-auto font-medium">
						Ready to bring your vision to life? Reach out through any of these
						platforms and let&apos;s create something extraordinary together.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto"
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{contactInfo.map((contact) => (
							<Link
								key={contact.platform}
								href={contact.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group"
							>
								<motion.div
									whileHover={{ y: -5 }}
									className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/5 transition-colors hover:bg-white/10"
								>
									<div className="w-12 h-12 relative">
										<Image
											src={contact.icon}
											alt={contact.platform}
											fill
											className="object-contain transition-all duration-300"
										/>
									</div>
									<span className="text-white/70 group-hover:text-white font-medium transition-colors">
										{contact.platform}
									</span>
								</motion.div>
							</Link>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}