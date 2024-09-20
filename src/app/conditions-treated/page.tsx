"use client";

export default function ConditionsTreated() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Commonly Treated Conditions with Homeopathy</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">For You Physically</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 mb-6">
              <li>Chronic Fatigue</li>
              <li>Fibromyalgia</li>
              <li>ME</li>
              <li>Autoimmune Conditions</li>
              <li>Arthritis</li>
              <li>Migraine</li>
              <li>IBS</li>
              <li>Skin Conditions</li>
              <li>Asthma</li>
              <li>Hayfever</li>
            </ul>
            <ul className="list-disc pl-5 mb-6">
              <li>Allergies</li>
              <li>Recurrent Infections</li>
              <li>Digestive conditions</li>
              <li>Sinus conditions</li>
              <li>Muscular & Skeletal Pain</li>
              <li>Circulatory Problems</li>
              <li>Sports Injuries</li>
              <li>PMT</li>
              <li>Menopause</li>
              <li>Infertility</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">For You Emotionally</h2>
          <ul className="list-disc pl-5 mb-6">
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Stress</li>
            <li>Insomnia</li>
            <li>Mood swings</li>
            <li>Grief and trauma</li>
          </ul>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">For Your Family</h2>
          <ul className="list-disc pl-5 mb-6">
            <li>Childhood illnesses</li>
            <li>Pregnancy-related issues</li>
            <li>Menopause symptoms</li>
            <li>Colds and flu</li>
            <li>Teething problems</li>
            <li>Growing pains</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">For Your Pets</h2>
          <ul className="list-disc pl-5 mb-6">
            <li>Skin allergies</li>
            <li>Digestive problems</li>
            <li>Arthritis in older animals</li>
            <li>Anxiety and behavioral issues</li>
            <li>Injuries and wounds</li>
            <li>Respiratory conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}