import"./hoisted.HS00y4BM.js";document.addEventListener("DOMContentLoaded",function(){l(),a(),d()});function l(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},o=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("revealed")})},e);document.querySelectorAll(".scroll-reveal").forEach(t=>{o.observe(t)})}function a(){const e=document.querySelectorAll(".deployment-option"),o=document.querySelectorAll(".deployment-arch");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>{i.classList.remove("active"),i.classList.remove("border-blue-500")}),t.classList.add("active"),t.classList.add("border-blue-500"),o.forEach(i=>{i.classList.add("hidden")});const n=t.getAttribute("data-deployment"),r=document.getElementById(`${n}-arch`);r&&(r.classList.remove("hidden"),typeof anime<"u"&&anime({targets:r,opacity:[0,1],translateY:[20,0],duration:500,easing:"easeOutCubic"}))})})}function d(){document.querySelectorAll(".card-hover").forEach(e=>{e.addEventListener("mouseenter",()=>{typeof anime<"u"&&anime({targets:e,scale:e.classList.contains("featured")?1.05:1.02,translateY:-4,duration:300,easing:"easeOutCubic"})}),e.addEventListener("mouseleave",()=>{typeof anime<"u"&&anime({targets:e,scale:e.classList.contains("featured")?1.05:1,translateY:0,duration:300,easing:"easeOutCubic"})})}),document.querySelectorAll("button").forEach(e=>{e.addEventListener("click",o=>{const t=o.target.textContent.trim();typeof anime<"u"&&anime({targets:o.target,scale:[1,.95,1],duration:200,easing:"easeOutCubic"}),t.includes("Consultation")?s():t.includes("Guide")&&c()})})}function s(){const e=document.createElement("div");e.className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",e.innerHTML=`
                <div class="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-blue-500/30">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-white mb-2">Schedule Consultation</h3>
                        <p class="text-gray-400">Get expert guidance for your AI implementation</p>
                    </div>
                    <form class="space-y-4">
                        <input type="text" placeholder="Full Name" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                        <input type="email" placeholder="Work Email" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                        <input type="text" placeholder="Company" class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none">
                        <select class="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                            <option>Select Service Type</option>
                            <option>Architecture Design</option>
                            <option>Implementation & Deployment</option>
                            <option>Training & Support</option>
                            <option>Custom Solution</option>
                        </select>
                        <div class="flex space-x-3 pt-4">
                            <button type="submit" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                                Schedule Consultation
                            </button>
                            <button type="button" class="close-modal flex-1 border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `,document.body.appendChild(e),e.querySelector(".close-modal").addEventListener("click",()=>{document.body.removeChild(e)}),e.addEventListener("click",o=>{o.target===e&&document.body.removeChild(e)}),typeof anime<"u"&&anime({targets:e.querySelector("div"),scale:[.8,1],opacity:[0,1],duration:300,easing:"easeOutCubic"})}function c(){const e=document.createElement("div");e.className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg z-50",e.textContent="Service guide download will be available soon!",document.body.appendChild(e),setTimeout(()=>{document.body.removeChild(e)},3e3),typeof anime<"u"&&anime({targets:e,translateX:[300,0],opacity:[0,1],duration:300,easing:"easeOutCubic"})}
