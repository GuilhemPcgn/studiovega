import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { brand } from '@/lib/brand-colors';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), 'public/images/logo-sv-440.png')
  );
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: brand.bgDarkSection,
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={440}
          height={152}
          alt=""
          style={{ marginBottom: 40 }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 700,
            color: brand.textOnDark,
            marginBottom: 16,
          }}
        >
          Studio Vega
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            fontWeight: 500,
            color: brand.accentOnDark,
          }}
        >
          Développeur Web Fullstack
        </div>
      </div>
    ),
    { ...size }
  );
}
