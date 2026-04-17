export function RefundPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Refund Policy
          </h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: April 12, 2024
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-purple-900 mb-2">Our Promise</h2>
              <p className="text-purple-700">
                We stand behind the quality of our digital products. If you are not satisfied with 
                your purchase, we offer a 7-day money-back guarantee on all products.
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Refund Eligibility</h2>
            <p className="text-gray-600 mb-4">
              To be eligible for a refund, the following conditions must be met:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>The refund request is made within 7 days of purchase</li>
              <li>You have not extensively used or distributed the product</li>
              <li>You can provide proof of purchase (order number or receipt)</li>
              <li>The product is not working as described due to our fault</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Non-Refundable Items</h2>
            <p className="text-gray-600 mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Products purchased more than 7 days ago</li>
              <li>Products that have been extensively used or distributed</li>
              <li>Free products or promotional items</li>
              <li>Products marked as "Final Sale" or "Non-Refundable"</li>
              <li>Refunds requested due to change of mind after significant use</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How to Request a Refund</h2>
            <p className="text-gray-600 mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
              <li>Contact our support team at info@growthsparkllc.com</li>
              <li>Include your order number in the subject line</li>
              <li>Explain the reason for your refund request</li>
              <li>Allow up to 5 business days for processing</li>
            </ol>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Refund Processing</h2>
            <p className="text-gray-600 mb-4">
              Once your refund request is approved:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Refunds will be processed to the original payment method</li>
              <li>Processing time is typically 5-10 business days</li>
              <li>You will receive an email confirmation once the refund is processed</li>
              <li>Depending on your bank, it may take additional time for the funds to appear</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Partial Refunds</h2>
            <p className="text-gray-600 mb-4">
              In certain situations, only partial refunds may be granted:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Products with missing components (partial refund for missing items)</li>
              <li>Products that show signs of use but are still in good condition</li>
              <li>Products returned after the 7-day window due to extenuating circumstances</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Exchanges</h2>
            <p className="text-gray-600 mb-4">
              We do not offer direct exchanges for digital products. If you purchased the wrong 
              product, please request a refund and purchase the correct product separately.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Technical Issues</h2>
            <p className="text-gray-600 mb-4">
              If you are experiencing technical issues with a product:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Contact our support team for assistance first</li>
              <li>We will attempt to resolve the issue before processing a refund</li>
              <li>If the issue cannot be resolved, a full refund will be provided</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For refund requests or questions about this policy, please contact us:
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
