export function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Legal Information
          </h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: April 12, 2024
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Company Information</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <table className="w-full text-left">
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Company Name</td>
                    <td className="py-3">GROWTH SPARK LLC</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Business Type</td>
                    <td className="py-3">Limited Liability Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Registered Address</td>
                    <td className="py-3">290 Fillmore St, Denver, CO 80206</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Phone Number</td>
                    <td className="py-3">+1 919 892 3654</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Email Address</td>
                    <td className="py-3">info@growthsparkllc.com</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Website</td>
                    <td className="py-3">growthsparkllc.com</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The information provided on this website is for general informational purposes only. 
              While we strive to keep the information up to date and correct, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              suitability, or availability of the website or the information, products, services, or 
              related graphics contained on the website.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise stated, GROWTH SPARK LLC owns the intellectual property rights for all 
              material on this website and in our digital products. All intellectual property rights are 
              reserved. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Republish material from our website or products</li>
              <li>Sell, rent, or sub-license material from our website or products</li>
              <li>Reproduce, duplicate, or copy material from our website or products</li>
              <li>Redistribute content from our website or products</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall GROWTH SPARK LLC, nor any of its officers, directors, and employees, 
              be liable to you for anything arising out of or in any way connected with your use of 
              this website or our products, whether such liability is under contract, tort, or otherwise.
            </p>
            <p className="text-gray-600 mb-4">
              GROWTH SPARK LLC, including its officers, directors, and employees, shall not be liable 
              for any indirect, consequential, or special liability arising out of or in any way related 
              to your use of this website or our products.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You hereby indemnify to the fullest extent GROWTH SPARK LLC from and against any and all 
              liabilities, costs, demands, causes of action, damages, and expenses (including reasonable 
              attorney's fees) arising out of or in any way related to your breach of any of the provisions 
              of these terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of 
              the State of Colorado, United States, and you irrevocably submit to the exclusive 
              jurisdiction of the courts in that location.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Severability</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these terms is found to be invalid under any applicable law, such 
              provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Variation of Terms</h2>
            <p className="text-gray-600 mb-4">
              GROWTH SPARK LLC is permitted to revise these terms at any time as it sees fit, and by 
              using this website you are expected to review these terms on a regular basis.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Entire Agreement</h2>
            <p className="text-gray-600 mb-4">
              These terms constitute the entire agreement between GROWTH SPARK LLC and you in relation 
              to your use of this website and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any legal inquiries, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: info@growthsparkllc.com<br />
              Phone: +1 919 892 3654<br />
              Address: 290 Fillmore St, Denver, CO 80206
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
