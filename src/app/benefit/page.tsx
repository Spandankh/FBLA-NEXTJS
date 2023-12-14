import Image from 'next/image'
import HealthCare from '../../../../public/images/HealtCare.png'

export default async function benefit() {
    return (
        <>
            <div className=" text-black grid  grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 1</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={HealthCare}
                        alt="HealthCare"
                        width={200}
                        height={20}
                    />
                    <span>RANDOM TEXT TEXT Image 2</span>
                </div>
            </div>
        </>
    )
}
