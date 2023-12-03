import typeOfPaper1 from '../../assets/img/typeOfPaper1.png';
import typeOfPaper2 from '../../assets/img/typeOfPaper2.png';
import typeOfPaper3 from '../../assets/img/typeOfPaper3.png';
import foiling1 from '../../assets/img/Foiling1.png';
import foiling2 from '../../assets/img/Foiling2.png';
import foiling3 from '../../assets/img/Foiling3.png';

function ProductAdditionalInformation() {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-[18px] mb-[12px]'>Types of papers</h1>
                <div className='flex'>
                    <div className='mr-[36px]'>
                        <img src={typeOfPaper1} alt="SBS C13 300 GSM paper" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>SBS C13 300 GSM paper</p>
                    </div>
                    <div className='mr-[36px]'>
                        <img src={typeOfPaper2} alt="SBS C13 300 GSM paper" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>SBS C13 300 GSM paper</p>
                    </div>
                    <div className='mr-[36px]'>
                        <img src={typeOfPaper3} alt="White black duplex 300 GSM" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>SBS C13 300 GSM paper</p>
                    </div>
                </div>
                <p>Some information about paper</p>
            </div>
            <div className='mt-[24px]'>
                <h1 className='font-semibold text-[18px] mb-[12px]'>Foiling</h1>
                <div className='flex'>
                    <div className='mr-[36px]'>
                        <img src={foiling1} alt="Gold foiling" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>Gold foiling</p>
                    </div>
                    <div className='mr-[36px]'>
                        <img src={foiling2} alt="Blue foiling" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>Blue foiling</p>
                    </div>
                    <div className='mr-[36px]'>
                        <img src={foiling3} alt="Black foiling" className="h-[220px] w-[220px] object-fill" />
                        <p className='mt-[32px]'>Black foiling</p>
                    </div>
                </div>
                <p>Some information about paper</p>
            </div>
        </div>
    )
}

export default ProductAdditionalInformation