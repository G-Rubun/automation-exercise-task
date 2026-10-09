import { browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export async function clickWithAdFallback(element: ChainablePromiseElement) {
    try {
        await element.click();
    } catch (error) {
        if (!(error instanceof Error) || !error.message.includes('element click intercepted')) {
            throw error;
        }

        await browser.execute((target: HTMLElement) => target.click(), element);
    }
}