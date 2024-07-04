'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export const ShortURL = ({
	url,
	protocol,
	className,
	children,
}: {
	url: string;
	protocol?: boolean;
	className?: string;
	children?: React.ReactNode;
}) => {
	const hasFetched = useRef(false);
	const [shortURL, setShortURL] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const path = usePathname();
	useEffect(() => {
		if (hasFetched.current) return;

		const fetchShortURL = async () => {
			try {
				const res = await fetch('https://vgz.vercel.app/api/link', {
					method: 'POST',
					mode: 'cors',
					credentials: 'omit',
					body: JSON.stringify({
						URL: url,
						Path: path,
					}),
				});

				const data = await res.json();
				setShortURL(data.res.shortURL);
			} catch (error) {
				console.error('Fetch error:', error);
				setError('Failed to fetch short URL');
			}
		};

		fetchShortURL();
		hasFetched.current = true; // Marquer comme exécuté;
	}, [url, path]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<a
			className={className}
			target="_blank"
			href={`https://vgz.vercel.app/${shortURL == null ? '' : shortURL}` ?? ''}
		>
			{children
				? children
				: protocol == true
				? url
				: url.replace('https://', '').replace('http://', '')}
		</a>
	);
};
