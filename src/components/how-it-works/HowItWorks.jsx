import { Flag, ArrowDown, FileText, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-6xl mx-auto space-y-24'>
        {/* What's Cars & Bids Section */}
        <section id='how-it-works'>
          <h1 className='font-bold text-center mb-4'>How HomyBid Works</h1>
          <div className='h-1 w-32 bg-primary mx-auto mb-16'></div>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Feature 1 */}
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                <Flag className='w-6 h-6 text-primary' />
              </div>
              <h2 className='text-2xl font-semibold'>Feature One</h2>
              <p className='text-muted-foreground text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                <ArrowDown className='w-6 h-6 text-primary' />
              </div>
              <h2 className='text-2xl font-semibold'>Feature Two</h2>
              <p className='text-muted-foreground text-lg'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                <FileText className='w-6 h-6 text-primary' />
              </div>
              <h2 className='text-2xl font-semibold'>Feature Three</h2>
              <p className='text-muted-foreground text-lg'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                <Check className='w-6 h-6 text-primary' />
              </div>
              <h2 className='text-2xl font-semibold'>Feature Four</h2>
              <p className='text-muted-foreground text-lg'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id='about' className='scroll-mt-16'>
          <h2 className='text-3xl font-bold mb-8'>About Us</h2>
          <div className='prose prose-lg max-w-none'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>
          </div>
        </section>

        {/* Process Section 1 */}
        <section id='buying' className='scroll-mt-16'>
          <h2 className='text-3xl font-bold mb-8'>Process One</h2>
          <div className='prose prose-lg max-w-none'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium:
            </p>
            <ul>
              <li>Step one of the process</li>
              <li>Step two of the process</li>
              <li>Step three of the process</li>
              <li>Step four of the process</li>
              <li>Step five of the process</li>
            </ul>
          </div>
        </section>

        {/* Process Section 2 */}
        <section id='selling' className='scroll-mt-16'>
          <h2 className='text-3xl font-bold mb-8'>Process Two</h2>
          <div className='prose prose-lg max-w-none'>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis:
            </p>
            <ul>
              <li>First step of this process</li>
              <li>Second step of this process</li>
              <li>Third step of this process</li>
              <li>Fourth step of this process</li>
              <li>Fifth step of this process</li>
            </ul>
          </div>
        </section>

        {/* Process Section 3 */}
        <section id='finalizing' className='scroll-mt-16'>
          <h2 className='text-3xl font-bold mb-8'>Process Three</h2>
          <div className='prose prose-lg max-w-none'>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod:
            </p>
            <ul>
              <li>Step A of the final process</li>
              <li>Step B of the final process</li>
              <li>Step C of the final process</li>
              <li>Step D of the final process</li>
              <li>Step E of the final process</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='faq' className='scroll-mt-16'>
          <h2 className='text-3xl font-bold mb-8'>
            Frequently Asked Questions
          </h2>

          {/* FAQ Group 1 */}
          <div id='buyer-faq' className='mb-12 scroll-mt-16'>
            <h3 className='text-2xl font-semibold mb-6'>FAQ Group 1</h3>
            <div className='space-y-6'>
              <div>
                <h4 className='text-xl font-medium mb-2'>Question 1?</h4>
                <p className='text-muted-foreground'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4 className='text-xl font-medium mb-2'>Question 2?</h4>
                <p className='text-muted-foreground'>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Group 2 */}
          <div id='seller-faq' className='scroll-mt-16'>
            <h3 className='text-2xl font-semibold mb-6'>FAQ Group 2</h3>
            <div className='space-y-6'>
              <div>
                <h4 className='text-xl font-medium mb-2'>Question A?</h4>
                <p className='text-muted-foreground'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <h4 className='text-xl font-medium mb-2'>Question B?</h4>
                <p className='text-muted-foreground'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HowItWorks;
