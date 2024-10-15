'use client';

import * as Sentry from '@sentry/nextjs';

export default function GlobalError({ error, reset }) {
    // You can capture the error using Sentry
    Sentry.captureException(error);

    return (
        <html>
        <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    );
}
