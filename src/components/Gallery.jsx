import Image from "next/image";

import gallery from "~/landing/gallery.svg";

export default function Gallery() {
    return (
        <section className='container mt-40 mb-20'>
            <Image
                src={gallery}
                width={1440}
                height={790}
                alt='Volunteers Gallery'
            ></Image>
        </section>
    );
}
