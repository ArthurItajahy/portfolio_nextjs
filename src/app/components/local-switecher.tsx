'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import '../../../node_modules/flag-icons/css/flag-icons.min.css';
import br from '../../../public/images/flags/brazil.png'
import us from '../../../public/images/flags/us.png'

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {

        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <div >

            <label className='border-2 hover:border-green-500 text-white hover:text-green-500 rounded-md py-3 px-2'>
                <p className='sr-only hover:bg-green-400'>change language</p>
                <select
                    defaultValue={localActive}
                    className='bg-transparent py-3 px-3'
                    onChange={onSelectChange}
                    disabled={isPending}
                >
                    <option value='en'>English 🇺🇸</option>
                    <option value='pt-br'>Português-Br 	🇧🇷</option>
                </select>
            </label>
        </div>
    );
}