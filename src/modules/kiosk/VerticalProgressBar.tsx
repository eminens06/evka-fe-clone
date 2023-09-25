import React from 'react';

interface VerticalProgressBarProps {
    barem1: number;
    barem2: number;
    barem3: number;
    currentMonthTotal: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ barem1, barem2, barem3, currentMonthTotal }) => {
    const maxLength = barem3 * 1.15;
    const progressLength = Math.min((currentMonthTotal / maxLength) * 100, 100);
    const barem1Length = (barem1 / maxLength) * 100;
    const barem2Length = (barem2 / maxLength) * 100;
    const barem3Length = (barem3 / maxLength) * 100;
    const relativeProgressLength = Math.min((currentMonthTotal / barem1) * 100, 100);

    const barStyle = {
        height: '30px',
        width: '100%',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        background: '#C4C4C4'
    };

    const percentageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        fontWeight: 'bold',
        padding: '2px 5px', // padding inside the background box
        backgroundColor: '#FFF', // background color of the box
        color: '#000', // color of the text
    };

    const milestoneStyle = {
        height: '100%',
        width: '2px',
        backgroundColor: '#000',
        position: 'absolute',
        top: '0'
    };
    const gradientStyle = {
        height: '100%',
        width: `${progressLength}%`,
        backgroundColor: '#4CAF50',
        position: 'absolute',
        borderRadius: progressLength < 100 ? '15px 0 0 15px' : '0',
    };

    const totalStyle = {
        position: 'absolute',
        top: '50%',
        left: `${progressLength / 2}%`, // adjusted to hopefully place the text more centrally in the filled area
        transform: 'translateY(-50%) translateX(-50%)',
        color: '#FFF',
        fontWeight: 'bold',
    };

    return (
        <div style={{ height: '30px', width: '100%', position: 'relative', padding: '10px' }}>
            <div style={barStyle}>
                <div style={gradientStyle}></div>
                <div style={{ ...milestoneStyle, left: `${barem1Length}%` }}></div>
                <div style={{ ...milestoneStyle, left: `${barem2Length}%` }}></div>
                <div style={{ ...milestoneStyle, left: `${barem3Length}%` }}></div>
                <span style={{ position: 'absolute', left: `${barem1Length}%`, top: '50%', transform: 'translateY(-50%) translateX(5px)', color: '#000', fontWeight: 'bold' }}>Barem 1</span>
                <span style={{ position: 'absolute', left: `${barem2Length}%`, top: '50%', transform: 'translateY(-50%) translateX(5px)', color: '#000', fontWeight: 'bold' }}>Barem 2</span>
                <span style={{ position: 'absolute', left: `${barem3Length}%`, top: '50%', transform: 'translateY(-50%) translateX(5px)', color: '#000', fontWeight: 'bold' }}>Barem 3</span>
                <span style={totalStyle}>{parseFloat(currentMonthTotal.toFixed(2)).toLocaleString()} ₺ (%{(relativeProgressLength.toFixed(2))})</span>
            </div>
        </div>
    );
}



export default VerticalProgressBar;
