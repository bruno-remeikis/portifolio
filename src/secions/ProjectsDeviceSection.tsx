import Image from 'next/image';
import styles from '../styles/sections/ProjectsDevice.module.scss';
import { useState } from 'react';

type LaptopProps = {
    project: {
        img: string;
        width: number;
        height: number;
    }
}

const Laptop: React.FC<LaptopProps> = ({ project }) =>
{
    // Tamanho da imagem
    const deviceSize = {
        w: 4814,
        h: 2629
    };

    // Escala a ser aplicada em todas as imagens (1 = 100%)
    const scale = 0.15;

    // Tamanho da área interna no laptop, onde será exibida a imagem do projeto
    const contentSize = {
        w: 3785,
        h: 2313,
        //wScale: 0.755,  // w * 100 / originalDeviceSize.w
        //hScale: 0.8598, // h * 100 / originalDeviceSize.h
    }

    // largura das bordas do laptop
    const frameSize = {
        vertical: 38,
        horizontal: 61
    }

    // style das divs que escondem o que escapa do interior do laptop
    const hidderStyle = {
        width: `${(deviceSize.w - frameSize.vertical * 2 - contentSize.w) * scale / 2}px`,
        height: `${(contentSize.h + frameSize.horizontal * 2) * scale}px`,

        // width: `${(project.width - contentSize.w - frameSize.vertical * 2) * scale / 2}px`
    }

    return (
        <div
            className={styles.deviceContainer}
            style={{
                width: `${deviceSize.w * scale}px`,
                height: `${deviceSize.h * scale}px`
            }}
        >
            {/* Project image */}
            <Image
                className={styles.projectImg}
                style={{ top: `${frameSize.horizontal * scale}px` }}
                src={`/img/projects/${project.img}`}
                width={contentSize.w * scale}
                height={contentSize.h * scale}
                alt='Chess project'
            />

            
                <div className={styles.hidderLeft} style={hidderStyle} />
                <div className={styles.hidderRight} style={hidderStyle} />

            {/* Device image */}
            <Image
                className={styles.deviceImg}
                src='/img/devices/laptop-2.png'
                width={deviceSize.w * scale}
                height={deviceSize.h * scale}
                alt='Laptop frame'
            />
        </div>
    );
}

const ProjectsDeviceSection: React.FC = () => {

    const [carouselIndex, setCarouselIndex] = useState<number>(0);

    return (
        <div id="projects" className={`section ${styles.projectsSection}`}>
            <div className={styles.devices}>
                <Laptop project={{
                    img: 'chess.png',
                    width: 1920,
                    height: 1079
                }} />

                <Laptop project={{
                    img: 'calendario.png',
                    width: 1366,
                    height: 625
                }} />
            </div>

            <br /><br /><br />

            <div className={styles.rowTest} style={{ marginLeft: `calc(100vw / 2 - 3785px * 0.15 / 2 - 3785px * 0.15 * ${carouselIndex})` }}>
                {[...Array(3)].map((_, i) =>
                    <Image
                        key={i}
                        className={styles.projectImg}
                        // style={{ top: `${frameSize.horizontal * scale}px` }}
                        src={`/img/projects/chess.png`}
                        width={3785 * 0.15}
                        height={2313 * 0.15}
                        // style={{ display: 'block', width: 'auto' }}
                        alt='Chess project'
                    />
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type='button' onClick={() => setCarouselIndex(prev => prev + 1)}>{ '<' }</button>
                <button type='button' onClick={() => setCarouselIndex(prev => prev - 1)}>{ '>' }</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                
                <Laptop project={{
                    img: 'chess.png',
                    width: 1920,
                    height: 1079
                }} />
            </div>

            {/* <div className={styles.deviceContainer}>
                <Image className={styles.projectImg} src='/img/projects/chess.png' width={500} height={500} alt='Chess project' />

                <div className={styles.hidderLeft} />
                <div className={styles.hidderRight} />

                <Image className={styles.deviceImg} src='/img/devices/laptop-2.png' width={500} height={500} alt='Laptop frame' />
            </div>

            <div className={styles.deviceContainer}>
                <Image className={styles.projectImg} src='/img/projects/calendario.png' width={500} height={500} alt='Chess project' />

                <div className={styles.hidderLeft} />
                <div className={styles.hidderRight} />

                <Image className={styles.deviceImg} src='/img/devices/laptop-2.png' width={500} height={500} alt='Laptop frame' />
            </div> */}
        </div>
    );
}

export default ProjectsDeviceSection;