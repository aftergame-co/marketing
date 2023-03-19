// .speech-bubble:after {
// 	content: '';
// 	position: absolute;
// 	bottom: 0;
// 	left: 50%;
// 	width: 0;
// 	height: 0;
// 	border: 30px solid transparent;
// 	border-top-color: #00aabb;
// 	border-bottom: 0;
// 	margin-left: -30px;
// 	margin-bottom: -30px;
// }

export function SpeechBubble({ children, className, ...props }) {
  return (
    <div className={className} {...props}>
      <div className="flex relative rounded-xl bg-gg-blue-faint p-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-10 after:-ml-2 after:border-8 after:border-t-[16px] after:border-transparent after:border-t-gg-red/75 after:rounded-full after:animate-bounce">
        {children}
      </div>
    </div>
  )
}