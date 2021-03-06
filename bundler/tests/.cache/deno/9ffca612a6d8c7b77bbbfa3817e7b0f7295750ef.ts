// Loaded from https://deno.land/x/cliffy@v0.12.1/packages/x/snakeCase.ts


import normalCase from './normalCase.ts';

export default function snakeCase( value: string, locale?: string ): string {
    return normalCase( value, locale, '_' );
}
