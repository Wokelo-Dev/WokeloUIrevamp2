import * as React from 'react';

function SignalAndTrends(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={180} height={142} fill="none" {...props}>
			<mask
				id="prefix__a"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={180}
				height={142}
			>
				<path fill="#D9D9D9" d="M0 0h180v142H0z" />
			</mask>
			<g mask="url(#prefix__a)">
				<path
					d="M155.193 39.318l-7.767 4.296c-1.299.725-3.442.737-4.768.05l-7.861-4.12c-.67-.35-.991-.825-.991-1.287l-.04-3.322c0-.025.027-.038.053-.025l3.228 1.536h.04l2.826-4.995c1.299-.724 8.169-1.287 9.495-.6l3.415 5.42h.04l3.201-1.598c.027-.013.054 0 .054.025l.04 3.346c0 .45-.322.912-.965 1.274zm-15.093-2.21a.035.035 0 000 .062l1.715.812.026.724 6.978-.45v-.724l1.031-.511-3.616-1.899c-.723-.374-1.888-.362-2.598.025l-3.536 1.96z"
					fill="#795EFF"
				/>
				<path
					d="M134.609 39.843l7.875 4.121c1.433.75 3.737.724 5.143-.05l7.767-4.296c.75-.412 1.165-.986 1.152-1.598l-.04-3.347-.013-.225-.402-.212-3.094 1.536-3.294-5.22-.094-.05c-1.42-.75-8.464-.188-9.87.6l-.094.05-2.705 4.795-2.92-1.387-.227-.087-.389.237.04 3.51c0 .362.121.699.389.999.174.237.442.45.776.624zm2.277-3.085l.228.088.268-.15 2.825-4.995c1.366-.612 7.581-1.124 8.933-.587l3.415 5.407.308.15 2.893-1.436.04 2.81c0 .35-.268.687-.777.974l-7.767 4.283c-1.179.65-3.188.675-4.379.05l-7.875-4.12c-.522-.276-.804-.613-.79-.975l-.027-2.772 2.705 1.273zm4.567 1.449v.137c.013.512.013.525.134.625l.12.1 7.139-.462c.348-.025.348-.25.348-.75v-.112l1.446-.724-4.232-2.223c-.844-.437-2.156-.425-2.986.037l-3.549 1.96-.215.138.041.45 1.754.824zm7.245-.999c-.254.087-.254.225-.254.674v.05l-6.214.4c-.014-.487-.014-.562-.228-.662l-1.152-.55 3-1.66c.589-.325 1.607-.337 2.21-.025l3.013 1.573-.375.2z"
					fill="#150035"
				/>
				<path
					d="M147.239 29.315l7.888 4.134c1.312.687 1.326 1.823.027 2.547l-7.781 4.296c-1.299.712-3.415.737-4.728.05l-7.888-4.133c-1.312-.687-1.326-1.824-.027-2.548l7.781-4.296c1.299-.711 3.415-.736 4.728-.05zm-1.058 2.485c-.71-.374-1.862-.362-2.558.025l-4.312 2.386c-.697.387-.697.999.013 1.373l4.366 2.286c.71.374 1.861.362 2.558-.025l4.312-2.386c.696-.387.696-.999-.013-1.373l-4.366-2.285z"
					fill="#fff"
				/>
				<path
					d="M134.569 36.521l7.889 4.134c1.446.761 3.682.736 5.115-.05l7.781-4.309c.75-.412 1.165-.986 1.152-1.598-.013-.612-.429-1.174-1.192-1.574l-7.888-4.133c-1.446-.762-3.683-.737-5.116.05l-7.781 4.296c-.75.412-1.165.986-1.151 1.598 0 .337.133.662.388.962.201.237.469.45.803.624zm8.143-6.844c1.165-.649 3.161-.674 4.339-.05l7.888 4.134c.509.262.79.6.804.95 0 .349-.268.686-.777.973l-7.781 4.296c-1.165.65-3.161.675-4.339.05l-7.888-4.133c-.509-.263-.79-.6-.804-.95 0-.35.268-.686.777-.974l7.781-4.296zm-3.562 6.22l4.366 2.285c.83.437 2.129.424 2.946-.038l4.312-2.372c.455-.25.71-.625.71-1.012s-.268-.75-.737-.986l-4.366-2.286c-.83-.437-2.129-.424-2.946.038l-4.312 2.385c-.455.25-.71.624-.71 1.011 0 .225.094.438.255.625.12.112.281.237.482.35zm11.209-1.499c.214.112.335.25.335.375 0 .124-.121.262-.335.387l-4.312 2.385c-.59.325-1.581.337-2.17.025l-4.366-2.285c-.214-.113-.335-.25-.348-.375 0-.125.121-.262.335-.387l4.299-2.385c.589-.325 1.58-.337 2.169-.025l4.393 2.285.187-.312-.187.312z"
					fill="#150035"
				/>
				<path
					d="M145.399 40.832l.036 3.31-.777.007-.035-3.31.776-.007zM145.274 31.518l.035 3.31-.763.006-.036-3.31.764-.006zM135.933 36.569l.035 3.309-.764.007-.034-3.31.763-.006zM154.099 36.656l.034 3.309-.776.007-.035-3.31.777-.006z"
					fill="#150035"
				/>
				<path
					d="M138.801 35.21s1.862 1.1 1.942 1.162c.094.062 2.906-1.35 2.906-1.35l1.165-.361-.013-3.147-1.701.637s-4.017 2.085-4.031 2.135c-.013.05-.268.924-.268.924zM144.988 47.835a6.193 6.193 0 01-2.866-.687l-3.575-1.86.482-.812 3.576 1.86a5.227 5.227 0 004.807-.025l3.402-1.823.496.812-3.402 1.823a6.355 6.355 0 01-2.92.712z"
					fill="#150035"
				/>
				<path
					d="M117.643 38.167l-16.549 8.911c-6.36 3.425-11.163 8.911-13.483 15.42l-5.943 16.629c-3.088 8.638-9.472 15.917-17.93 20.45l-13.437 7.167L-2.567 78.03l13.684-7.408c8.28-4.485 14.543-11.608 17.65-20.06L35.04 33.49c2.344-6.374 7.065-11.748 13.3-15.136l15.982-8.681 53.32 28.495z"
					fill="#583BE8"
				/>
				<path
					d="M50.295 107.274L-3.541 78.029l14.412-7.798c8.177-4.431 14.365-11.464 17.437-19.813l6.275-17.074c2.383-6.476 7.18-11.94 13.517-15.382l16.223-8.82 54.3 29.024-17.283 9.308c-6.263 3.372-10.973 8.761-13.265 15.168L82.132 79.27c-3.128 8.756-9.575 16.11-18.147 20.702l-13.69 7.301zM-1.593 78.029l51.9 28.19 13.19-7.038c8.367-4.48 14.653-11.657 17.707-20.199l5.943-16.63c2.366-6.62 7.231-12.18 13.706-15.67l15.81-8.516-52.34-27.97-15.736 8.547c-6.131 3.335-10.778 8.623-13.088 14.89l-6.274 17.073c-3.14 8.559-9.484 15.773-17.867 20.312l-12.95 7.011z"
					fill="#150035"
				/>
				<g clipPath="url(#prefix__clip0_299_19277)">
					<path
						d="M52.438 93.935c.106-1.528-2.102-2.905-4.932-3.076-2.83-.171-5.21.928-5.315 2.456-.106 1.528 2.102 2.906 4.932 3.077 2.83.17 5.209-.929 5.315-2.457z"
						fill="#583BE8"
					/>
					<path
						d="M42.576 90.832c2.074-.958 5.323-.76 7.249.439 1.925 1.198 1.805 2.948-.27 3.906-2.074.959-5.323.76-7.248-.438-1.931-1.2-1.811-2.95.269-3.907z"
						fill="#fff"
					/>
					<path
						d="M43.195 95.697c-1.077-.67-1.639-1.53-1.576-2.42.063-.888.733-1.675 1.897-2.21 2.263-1.043 5.816-.83 7.919.477 1.077.669 1.639 1.53 1.576 2.419-.063.888-.734 1.675-1.897 2.21-.968.444-2.166.664-3.392.664-1.64 0-3.324-.39-4.527-1.14zm.619-4.073c-.94.433-1.479 1.033-1.525 1.691-.045.658.407 1.322 1.278 1.863 1.926 1.198 5.18 1.397 7.255.439.94-.434 1.478-1.034 1.524-1.692.046-.658-.407-1.322-1.278-1.862-1.106-.685-2.641-1.044-4.148-1.044-1.124 0-2.224.198-3.106.605z"
						fill="#150035"
					/>
					<path
						d="M47.86 92.16l.406 1.466a.302.302 0 01-.091.31c-.2.182-.59.257-.963.198l-2.682-.444c-.326-.054-.527-.236-.453-.407.075-.171.402-.267.723-.214l2.206.364-.338-1.226c-.052-.182.177-.337.504-.353.332-.01.642.123.688.305z"
						fill="#583BE8"
					/>
					<path
						d="M48.593 92.614L49 94.081a.302.302 0 01-.092.31c-.2.182-.59.257-.963.198l-2.681-.444c-.327-.053-.528-.236-.453-.407.074-.171.401-.267.722-.214l2.206.364-.338-1.226c-.052-.181.178-.337.504-.353.333-.01.636.123.688.305zM54.065 95.167c.361-.632.59-1.665-.332-3.003l-.562.337c.602.867.705 1.67.304 2.371l.59.295zM52.357 96.655c.03-.01.723-.316 1.29-.926l-.505-.407c-.475.509-1.06.771-1.065.771l.28.562z"
						fill="#150035"
					/>
					<path
						d="M102.738 43.331l-42.18-22.623 2.355-1.268 42.18 22.623-2.355 1.268z"
						fill="#fff"
					/>
					<path
						d="M102.738 43.856l-.246-.129-42.914-23.02 3.335-1.798.246.129 42.92 23.014-3.341 1.804zm-41.2-23.149l41.2 22.1 1.381-.744-41.2-22.1-1.382.744z"
						fill="#150035"
					/>
					<path
						d="M107.34 40.8L59.801 15.22l2.355-1.274 47.539 25.584-2.355 1.268z"
						fill="#fff"
					/>
					<path
						d="M107.34 41.329L58.821 15.221l3.335-1.798.247.134 48.272 25.974-3.335 1.798zM60.775 15.221l46.565 25.054 1.381-.744-46.565-25.054-1.38.744z"
						fill="#150035"
					/>
					<path
						d="M98.12 45.916L64.98 28.226l2.356-1.273 33.144 17.694-2.361 1.269z"
						fill="#fff"
					/>
					<path
						d="M98.125 46.446L64.001 28.227l3.335-1.798 34.124 18.213-3.335 1.804zM65.961 28.222l32.159 17.17 1.375-.745-32.153-17.164-1.38.739z"
						fill="#150035"
					/>
					<path
						d="M37.195 89.14L11.191 75.326l2.356-1.274 26.01 13.82-2.362 1.267z"
						fill="#fff"
					/>
					<path
						d="M37.201 89.664l-.246-.128-26.744-14.21 3.335-1.799.241.129 26.743 14.21-3.329 1.798zM12.177 75.32l25.018 13.295 1.376-.744-25.019-13.295-1.375.744z"
						fill="#150035"
					/>
					<path
						d="M52.839 29.43a30.366 30.366 0 00-1.605 1.676l38.743 20.633c.516-.573 1.06-1.13 1.627-1.665L52.84 29.431z"
						fill="#fff"
					/>
					<path
						d="M90.091 52.328L50.495 31.24l.367-.417a29.373 29.373 0 011.627-1.708l.264-.257L92.4 49.973l-.447.422a29.022 29.022 0 00-1.599 1.638l-.264.295zM51.985 30.983l37.883 20.173c.315-.338.63-.664.945-.98L52.93 30.004c-.332.332-.647.658-.945.98z"
						fill="#150035"
					/>
					<path
						d="M48.29 35.725l38.667 20.59c.384-.643.797-1.269 1.232-1.88L49.492 33.83c-.424.62-.825 1.247-1.203 1.895z"
						fill="#fff"
					/>
					<path
						d="M87.146 56.941l-39.51-21.04.229-.39a26.67 26.67 0 011.22-1.922l.253-.363 39.55 21.06-.292.407c-.436.61-.843 1.231-1.21 1.847l-.24.401zM48.954 35.554l37.825 20.14c.23-.37.47-.733.722-1.103L49.658 34.446c-.246.364-.48.733-.704 1.108z"
						fill="#150035"
					/>
					<path
						d="M44.123 24.722a30.364 30.364 0 00-1.604 1.675l2.211 1.268c.516-.572 1.06-1.129 1.628-1.664l-2.235-1.28z"
						fill="#fff"
					/>
					<path
						d="M44.84 28.26l-3.049-1.75.355-.408a29.375 29.375 0 011.628-1.707l.275-.262 3.094 1.771-.435.407a28.987 28.987 0 00-1.6 1.638l-.268.31zm-1.582-1.976l1.375.787c.315-.342.636-.669.951-.98l-1.38-.791a29.28 29.28 0 00-.946.984z"
						fill="#150035"
					/>
					<path
						d="M39.58 31.015l2.137 1.225c.383-.642.796-1.268 1.232-1.878l-2.166-1.242a25.62 25.62 0 00-1.204 1.895z"
						fill="#fff"
					/>
					<path
						d="M41.894 32.883l-2.962-1.702.217-.38c.373-.642.785-1.29 1.22-1.921l.259-.375 3.002 1.723-.28.396c-.43.605-.837 1.226-1.21 1.847l-.246.412zm-1.662-2.029l1.313.755c.229-.37.47-.739.722-1.097l-1.33-.76c-.246.364-.481.733-.705 1.103z"
						fill="#150035"
					/>
					<path
						d="M43.58 47.628l38.272 20.504.756-2.13-38.25-20.493-.779 2.12z"
						fill="#fff"
					/>
					<path
						d="M82.12 68.807L42.99 47.837l1.1-2.997 39.11 20.954-1.078 3.013zM44.176 47.42l37.401 20.038.448-1.247-37.396-20.033-.453 1.242z"
						fill="#150035"
					/>
					<path
						d="M41.814 52.783l38.273 20.504.762-2.135-38.256-20.494-.779 2.125z"
						fill="#fff"
					/>
					<path
						d="M80.362 73.956l-39.138-20.97 1.1-3.003 39.109 20.954-1.072 3.019zM42.41 52.574L79.81 72.612l.447-1.247-37.39-20.038-.458 1.247z"
						fill="#150035"
					/>
					<path
						d="M39.883 57.626L78.15 78.13l.762-2.13-38.25-20.493-.78 2.12z"
						fill="#fff"
					/>
					<path
						d="M78.425 78.805l-39.138-20.97 1.1-2.997 39.11 20.954-1.072 3.013zM40.473 57.418l37.402 20.038.447-1.247-37.39-20.033-.459 1.242z"
						fill="#150035"
					/>
					<path
						d="M35.345 43.127l2.269 1.322.762-2.13-2.252-1.311-.78 2.12z"
						fill="#fff"
					/>
					<path
						d="M37.883 45.14l-3.129-1.82 1.106-3.008 3.1 1.804-1.077 3.024zm-1.954-2.205l1.415.824.442-1.241-1.404-.82-.453 1.237z"
						fill="#150035"
					/>
					<path
						d="M33.58 48.282l2.269 1.317.762-2.13-2.252-1.312-.78 2.125z"
						fill="#fff"
					/>
					<path
						d="M36.118 50.294l-3.129-1.814 1.106-3.008 3.1 1.803-1.077 3.019zm-1.954-2.21l1.415.824.442-1.242-1.404-.819-.453 1.236z"
						fill="#150035"
					/>
					<path
						d="M31.643 53.124l2.274 1.322.757-2.13-2.252-1.311-.78 2.12z"
						fill="#fff"
					/>
					<path
						d="M34.181 55.137l-3.129-1.82 1.106-3.007 3.1 1.803-1.077 3.024zm-1.948-2.205l1.415.824.441-1.241-1.404-.82-.452 1.237zM22.445 61.6l-.494.79 52.813 28.838.495-.79-52.814-28.839zM22.148 65.392l-.49.787 41.795 22.726.49-.786-41.795-22.727zM34.988 33.457l-.495.79 52.814 28.839.494-.79-52.813-28.839zM19.867 67.4l-.49.785 41.796 22.727.49-.787L19.867 67.4zM29.973 55.777l-.49.786L71.279 79.29l.49-.787-41.796-22.726z"
						fill="#150035"
					/>
				</g>
				<path
					d="M156.612 118.711l-24.432-11.778c-.926-.444-2.513-.322-3.519.294l-14.551 8.711-3.024-.811c-.091-.029-.214.028-.221.115-.252 1.277.247 3.117.247 3.117s.219.599.648.807l24.432 11.778c.926.443 2.513.321 3.519-.295l16.747-10.027c1.017-.605 1.091-1.456.154-1.911z"
					fill="#150035"
				/>
				<path
					d="M111.164 119.802c-.58-.374-.841-1.02-.887-1.166-.047-.146-.56-2.097-.282-3.537l.066-.357.402-.299c.26-.146.57-.188.857-.111l2.644.705 14.205-8.517c1.291-.781 3.186-.924 4.404-.326l24.433 11.777c.689.327 1.1.875 1.128 1.503.035.684-.412 1.364-1.218 1.841l-16.737 10.04c-1.291.781-3.185.923-4.404.326l-24.432-11.778c-.056-.037-.124-.064-.179-.101zm.517-3.663a9.02 9.02 0 00.295 2.021c.031.058.145.231.2.268l24.42 11.788c.655.313 1.877.197 2.645-.251l16.747-10.027c.298-.175.394-.333.397-.377 0 0-.021-.023-.066-.049-.021-.023-.055-.037-.1-.062l-24.433-11.778c-.655-.313-1.876-.197-2.644.251l-14.887 8.915-2.574-.699z"
					fill="#150035"
				/>
				<path
					d="M135.987 127.752l-24.443-11.789c-.926-.444-.863-1.307.153-1.911l16.748-10.028c1.017-.604 2.593-.738 3.519-.294l24.432 11.778c.926.443.863 1.306-.154 1.911l-16.747 10.027c-1.006.616-2.582.75-3.508.306z"
					fill="#fff"
				/>
				<path
					d="M110.847 116.537c-.524-.337-.824-.81-.848-1.339-.035-.684.412-1.364 1.218-1.841l16.747-10.028c1.291-.781 3.185-.924 4.404-.326l24.432 11.778c.689.326 1.101.874 1.129 1.502.034.684-.413 1.364-1.219 1.841l-16.747 10.028c-1.291.781-3.185.924-4.404.326l-24.432-11.777a8.916 8.916 0 01-.28-.164zm.957-1.411c.011.012.067.049.156.1l24.42 11.787c.655.314 1.877.197 2.645-.25l16.747-10.028c.298-.175.394-.333.397-.376 0 0-.021-.024-.066-.049-.021-.024-.055-.037-.1-.063l-24.433-11.778c-.655-.313-1.876-.196-2.644.251l-16.748 10.028c-.286.187-.37.334-.374.378-.023-.002-.012.01 0 0z"
					fill="#150035"
				/>
				<path
					d="M168.444 73.112L94.506 37.434c-.61-.288-.984-.316-1.57-.338 0 0-2.475-.352-5.077 2.934l2.584 7.237 3.905 4.074 1.763 35.716c.093 1.919 1.457 4.087 3.038 4.844l62.14 29.986 6.774 9.378s1.986.15 5.091-2.56l.013-.01c.514-.368.799-1.082.755-2.063l-2.44-48.676c-.116-1.92-1.457-4.087-3.038-4.844z"
					fill="#fff"
				/>
				<path
					d="M98.228 92.348c-1.614-1.056-2.906-3.241-3.002-5.259L93.46 51.68l-3.806-3.99-2.781-7.812.276-.342c2.893-3.659 5.812-3.273 5.929-3.265.586.023 1.1.062 1.845.425l73.937 35.679c1.853.887 3.405 3.333 3.52 5.54l2.439 48.675c.06 1.213-.316 2.162-1.06 2.732-3.307 2.87-5.498 2.781-5.745 2.774l-.42-.032-6.891-9.529-61.958-29.907c-.181-.08-.35-.169-.517-.28zM91.21 46.84l3.99 4.169 1.81 36.005c.082 1.621 1.247 3.522 2.557 4.148l62.332 30.078 6.606 9.145c.633-.117 2.012-.562 3.918-2.198l.129-.122c.339-.249.501-.764.464-1.426l-2.439-48.675c-.083-1.622-1.248-3.522-2.558-4.149L94.089 38.171c-.429-.208-.662-.225-1.202-.244-.163-.013-1.961-.17-4.054 2.264l2.376 6.65z"
					fill="#150035"
				/>
				<path
					d="M166.699 131.129L92.761 95.451c-1.581-.757-2.933-2.936-3.038-4.844l-2.44-48.676c-.093-1.918 1.105-2.85 2.687-2.093l73.937 35.679c1.581.757 2.933 2.935 3.038 4.844l2.44 48.675c.093 1.919-1.105 2.85-2.686 2.093z"
					fill="#583BE8"
				/>
				<path
					d="M91.84 95.897c-1.614-1.055-2.907-3.24-3.002-5.258l-2.44-48.676c-.063-1.312.393-2.365 1.26-2.87.77-.47 1.734-.463 2.716.018l73.937 35.678c1.863.9 3.405 3.334 3.519 5.54l2.44 48.675c.063 1.312-.393 2.365-1.26 2.871-.77.469-1.734.462-2.716-.018l-73.95-35.669c-.168-.09-.337-.18-.504-.29zm71.975-19.453a1.742 1.742 0 00-.314-.178L89.563 40.587c-.226-.104-.658-.269-.933-.092-.236.147-.486.59-.439 1.406l2.416 48.674c.084 1.621 1.25 3.5 2.558 4.148l73.938 35.679c.226.105.658.269.933.092.236-.147.486-.589.439-1.406l-2.44-48.675c-.058-1.499-1.051-3.21-2.22-3.97z"
					fill="#150035"
				/>
				<path
					d="M165.832 117.914L92.3 82.442c-1.694-.81-3.146-2.93-3.239-4.705l.657 13.056c.093 1.776 1.533 3.884 3.238 4.706l73.509 35.47c1.694.809 2.996.04 2.915-1.746l-.656-13.057c.104 1.787-1.211 2.567-2.892 1.748z"
					fill="#150035"
				/>
				<path
					d="M91.946 95.894c-1.693-1.095-3.017-3.194-3.102-5.057l-.657-13.057 1.772-.086c.07 1.489 1.347 3.32 2.747 3.998l73.509 35.47c.507.247.973.305 1.234.138.262-.167.402-.563.379-1.114l1.772-.086.656 13.057c.053 1.157-.381 2.091-1.199 2.579-.819.487-1.91.459-3.018-.064L92.563 96.237a8.29 8.29 0 01-.617-.343zm-1.764-13.986l.433 8.843c.071 1.488 1.348 3.32 2.758 4.01l73.509 35.47c.508.247.973.304 1.235.137.272-.155.414-.573.378-1.114l-.515-10.343c-.74.262-1.65.172-2.576-.272L91.906 83.18a6.04 6.04 0 01-1.724-1.272z"
					fill="#150035"
				/>
				<path
					d="M111.663 97.96l-.471.854 12.199 5.88.471-.853-12.199-5.88zM137.364 110.362l-.471.853 12.199 5.879.472-.853-12.2-5.879z"
					fill="#583BE8"
				/>
				<path
					d="M165.689 77.218l1.016 1.358 4.309-2.81-1.016-1.359-4.309 2.81zM161.696 74.122l1.015 1.359 4.31-2.81-1.016-1.36-4.309 2.81zM167.041 91.947l1.015 1.359 4.31-2.81-1.016-1.36-4.309 2.811zM168.723 125.595l1.015 1.358 4.309-2.811-1.015-1.358-4.309 2.811zM91.212 40.083l1.016 1.358 4.309-2.81-1.016-1.358-4.309 2.81z"
					fill="#150035"
				/>
				<path
					d="M148.291 121.925l-.486.846 2.747 1.376.486-.846-2.747-1.376zM136.986 128.033l.16 3.202 1.027-.045-.16-3.202-1.027.045zM130.051 109.925c-.596-.32-1.182-.749-1.761-1.265l-.064-1.433c.324.332.686.634 1.061.926a6.3 6.3 0 00.99.657c.236.117.396.173.515.16.106-.003.148-.077.148-.219-.003-.099-.042-.19-.126-.306-.073-.105-.215-.236-.399-.415-.185-.179-.437-.385-.755-.661a5.408 5.408 0 01-.864-.879 2.92 2.92 0 01-.484-.794 2.687 2.687 0 01-.186-.849c-.017-.474.103-.773.396-.904.281-.122.713-.078 1.282.141l-.019-.595.858.416.031.585c.551.294 1.103.71 1.669 1.236l-.439.999c-.588-.55-1.118-.941-1.569-1.173-.226-.105-.375-.149-.458-.144-.095.014-.124.078-.121.177a.54.54 0 00.105.283c.063.092.181.222.344.377.163.155.381.348.666.589.581.494 1.002.932 1.273 1.327.272.394.401.799.423 1.229.028.485-.106.816-.378.971-.285.165-.695.145-1.253-.062l.009.847-.858-.416-.036-.805z"
					fill="#583BE8"
				/>
				<path
					d="M100.909 56.11l1.052 23.293a1.841 1.841 0 001.076 1.565l53.284 25.35c.576.275 1.171-.34.815-.85l-13.348-19.3c-.448-.66-1.16-1.131-1.979-1.314l-16.784-3.806c-.415-.098-.758-.354-.927-.708l-5.41-10.867c-.18-.365-.678-.458-.995-.185l-2.686 2.214a.97.97 0 01-1.386-.16l-11.576-15.585c-.345-.498-1.155-.241-1.136.354z"
					fill="#fff"
				/>
				<path
					d="M102.319 81.518c-.735-.473-1.198-1.244-1.219-2.081l-1.075-23.294c-.04-.64.386-1.201 1.027-1.406a1.565 1.565 0 011.73.538l11.576 15.584 2.755-2.208a1.56 1.56 0 011.311-.33c.474.091.872.385 1.072.796l5.409 10.867a.46.46 0 00.332.245l16.784 3.806a4.165 4.165 0 012.514 1.662l13.359 19.312c.375.556.316 1.233-.15 1.725-.466.492-1.206.612-1.826.312l-53.264-25.327a3.433 3.433 0 01-.335-.201zm-.478-24.623l1.028 22.478c.015.375.246.7.596.869l52.437 24.946-12.835-18.57c-.323-.474-.847-.81-1.434-.953l-16.784-3.807a2.215 2.215 0 01-1.522-1.17l-5.258-10.58-2.433 2.013c-.381.322-.899.47-1.424.42-.512-.061-.984-.317-1.279-.713l-11.092-14.933z"
					fill="#150035"
				/>
				<path
					d="M121.24 75.862l.535-1.564 6.193 1.83 6.44-2.654 3.586 10.059-1.703.52-2.948-8.331-5.269 2.172-6.834-2.032zM112.785 71.499l-2.414-10.828-3.742 1.508-.691-1.525 5.728-2.313 2.852 12.838-1.733.32zM156.315 105.714l-4.585-14.002-5.066-.45.178-1.644 6.232.558 4.93 15.05-1.689.488z"
					fill="#150035"
				/>
				<path
					d="M40.929 90.816c6.28 7.784 19.77 13.138 30.132 11.955 10.36-1.184 13.673-8.458 7.393-16.252-6.28-7.784-19.77-13.139-30.132-11.955-10.36 1.184-13.664 8.458-7.393 16.252z"
					fill="#583BE8"
				/>
				<path
					d="M40.929 90.816c6.28 7.784 19.77 13.139 30.132 11.955 5.175-.592 8.594-2.709 9.938-5.65l1.018-2.243-.922-.179c-.154-2.18-1.181-4.583-3.16-7.031-3.043-3.767-7.018-9.964-12.261-12.135-5.589-2.305-12.522-.44-17.86.17-3.265.377-5.82 1.355-7.605 2.754l-.788-.493-.94 2.071c-1.45 2.969-.75 6.808 2.448 10.78zm10.332-12.62c7.691-.878 17.697 3.095 22.363 8.87 4.657 5.777 2.209 11.176-5.483 12.055-3.84.439-7.182-2.072-11.234-3.677-4.043-1.606-8.796-2.306-11.13-5.193-4.666-5.776-2.208-11.166 5.484-12.054z"
					fill="#150035"
				/>
				<path
					d="M40.478 91.13c-3.083-3.822-4.033-7.642-2.727-10.844h-.01l1.421-3.121 1.008.628c1.892-1.372 4.504-2.27 7.567-2.628a88.688 88.688 0 003.409-.484c4.753-.727 10.14-1.552 14.749.35 4.474 1.847 7.999 6.457 10.831 10.16.586.763 1.133 1.49 1.661 2.144 1.863 2.305 2.977 4.69 3.236 6.915l1.181.233-1.286 2.843c-1.48 3.247-5.166 5.373-10.39 5.965-.98.116-1.988.17-3.015.17-9.996 0-21.845-5.157-27.635-12.332zm40.08 4l-.03-.404c-.153-2.135-1.2-4.467-3.043-6.745a95.639 95.639 0 01-1.68-2.161c-2.747-3.597-6.165-8.072-10.362-9.803-4.292-1.776-9.506-.978-14.105-.27-1.21.19-2.362.36-3.457.485-3.034.35-5.56 1.256-7.307 2.637l-.327.26-.566-.359-.461 1.014.019.009-.23.466c-1.431 2.915-.577 6.547 2.39 10.233 6.165 7.642 19.445 12.915 29.604 11.749 4.801-.547 8.172-2.44 9.478-5.327l.749-1.65-.673-.135zm-20.655 2.277c-1.037-.502-2.112-1.022-3.226-1.462-1.095-.44-2.276-.816-3.41-1.175-3.024-.968-6.154-1.964-7.95-4.188-2.381-2.95-3.073-5.937-1.959-8.395 1.124-2.457 3.899-4.062 7.826-4.51 7.855-.898 18.12 3.174 22.882 9.084 2.382 2.951 3.073 5.938 1.96 8.395-1.124 2.457-3.9 4.063-7.827 4.511a8.91 8.91 0 01-.97.054c-2.554-.009-4.877-1.13-7.326-2.314zm-8.575-18.681c-3.505.403-5.963 1.775-6.923 3.874-.95 2.099-.307 4.7 1.815 7.336 1.584 1.964 4.417 2.87 7.413 3.82 1.152.369 2.352.754 3.485 1.203 1.153.457 2.247.986 3.303 1.497 2.593 1.256 5.042 2.44 7.634 2.144 3.505-.404 5.963-1.776 6.923-3.874.951-2.1.308-4.7-1.814-7.337-4.12-5.112-12.56-8.78-19.685-8.78-.74 0-1.46.036-2.15.117z"
					fill="#150035"
				/>
				<path
					d="M42.043 88.367c6.28 7.785 19.77 13.139 30.132 11.955 10.36-1.184 13.673-8.457 7.393-16.25-6.28-7.785-19.77-13.14-30.131-11.956-10.361 1.193-13.674 8.466-7.394 16.251zm9.775-13.282c8.19-.933 18.85 3.291 23.814 9.453 4.964 6.152 2.342 11.901-5.839 12.843-8.19.932-18.849-3.292-23.813-9.453-4.965-6.162-2.343-11.91 5.838-12.843z"
					fill="#583BE8"
				/>
				<path
					d="M41.591 88.69c-3.169-3.928-4.09-7.875-2.612-11.13 1.479-3.247 5.166-5.372 10.39-5.964 10.534-1.202 24.274 4.25 30.65 12.161 3.17 3.928 4.09 7.875 2.612 11.13-1.479 3.247-5.166 5.372-10.39 5.964-.979.117-1.987.171-3.015.171-10.005 0-21.854-5.157-27.635-12.332zm7.912-16.036c-4.8.547-8.171 2.44-9.477 5.327-1.316 2.888-.432 6.467 2.477 10.072 6.155 7.641 19.445 12.915 29.604 11.749 4.801-.547 8.172-2.44 9.478-5.327 1.315-2.888.432-6.467-2.478-10.072-5.588-6.933-17.034-11.91-26.694-11.91-.99 0-1.96.044-2.91.161zm-3.975 15.587c-2.525-3.139-3.265-6.296-2.084-8.905 1.181-2.61 4.139-4.305 8.306-4.78 8.354-.951 19.272 3.38 24.332 9.659 2.526 3.138 3.265 6.295 2.084 8.905-1.19 2.61-4.138 4.305-8.306 4.78-.778.09-1.575.135-2.39.135-7.951-.009-17.352-4.099-21.942-9.794zm6.357-12.636c-3.755.43-6.376 1.901-7.394 4.143-1.018 2.242-.327 5.031 1.94 7.848 4.849 6.009 15.296 10.152 23.285 9.237 3.755-.43 6.376-1.901 7.394-4.143 1.018-2.242.326-5.031-1.94-7.848-4.398-5.453-13.395-9.372-21-9.372-.768.01-1.536.054-2.285.135z"
					fill="#150035"
				/>
				<path
					d="M61.487 88.86c2.15 2.664 6.77 4.503 10.313 4.09 3.543-.403 4.676-2.897 2.525-5.56-2.15-2.664-6.77-4.502-10.313-4.09-3.543.404-4.676 2.897-2.525 5.56z"
					fill="#fff"
				/>
				<path
					d="M61.132 89.103c-1.133-1.408-1.47-2.843-.922-4.036.538-1.193 1.873-1.964 3.755-2.18 3.677-.421 8.488 1.49 10.716 4.251 1.133 1.409 1.469 2.844.922 4.036-.538 1.193-1.873 1.964-3.755 2.18-.346.036-.691.063-1.056.063-3.495 0-7.634-1.803-9.66-4.314zm2.938-5.4c-1.555.18-2.64.78-3.053 1.687-.413.914-.125 2.053.816 3.22 2.064 2.555 6.51 4.322 9.91 3.937 1.555-.18 2.64-.78 3.053-1.686.413-.915.125-2.054-.816-3.22-1.873-2.323-5.704-3.991-8.94-3.991-.327 0-.653.018-.97.053z"
					fill="#150035"
				/>
				<path
					d="M61.478 89.282c-1.671-.664-3.179-1.668-4.13-2.852-.979-1.21-1.257-2.449-.796-3.471.47-1.022 1.613-1.695 3.226-1.874 3.16-.36 7.288 1.273 9.199 3.65.98 1.21 1.258 2.448.797 3.47-.47 1.023-1.613 1.696-3.226 1.875-1.585.18-3.41-.143-5.07-.798zm3.063-6.745c-1.537-.61-3.217-.905-4.677-.735-1.325.152-2.256.664-2.602 1.435-.355.78-.105 1.758.701 2.753 1.767 2.189 5.57 3.704 8.489 3.373 1.325-.153 2.256-.664 2.602-1.435.355-.78.105-1.758-.701-2.754-.884-1.103-2.276-2.027-3.812-2.637z"
					fill="#fff"
				/>
				<path
					d="M69.755 88.232c.47-1.022.182-2.26-.797-3.47-.327-.404-.74-.781-1.181-1.14a11.824 11.824 0 00-1.729-.296c.912.53 1.71 1.157 2.285 1.875.807.995 1.057 1.973.701 2.753-.355.78-1.277 1.292-2.602 1.435-1.68.188-3.649-.242-5.358-1.05.115.18.25.368.394.557.173.206.355.412.557.61 1.507.52 3.101.77 4.503.61 1.613-.198 2.766-.862 3.227-1.884z"
					fill="#583BE8"
				/>
				<path
					d="M73.864 100.654c-.105-.179-.326-.269-.624-.242l-2.583.305c-.605.072-1.315.61-1.584 1.22-.173.385-.125.708.096.861l21.912 27.327a.248.248 0 00.288.072l2.939-1.184c.01 0 .01-.009.019-.009l1.383-.709a.22.22 0 00.076-.332l-21.922-27.309z"
					fill="#fff"
				/>
				<path
					d="M90.62 130.439l-21.874-27.282c-.307-.269-.509-.763-.201-1.435.355-.78 1.229-1.444 2.045-1.534l2.583-.296c.509-.063.94.117 1.171.467l21.894 27.282a.726.726 0 01.144.619.773.773 0 01-.404.502l-1.363.691-3.025 1.22a.812.812 0 01-.317.062.782.782 0 01-.653-.296zm-17.207-29.462h.01l-.02-.035s-.029-.009-.096 0l-2.583.296c-.365.044-.922.43-1.133.896-.067.153-.067.252-.086.234l21.864 27.237 2.67-1.076 1.056-.538-21.682-27.014z"
					fill="#150035"
				/>
				<path
					d="M94.394 130.206l-2.583.296c-.605.071-.865-.368-.596-.969.279-.601.99-1.148 1.585-1.22l2.583-.296c.605-.071.864.368.595.969-.269.61-.98 1.148-1.584 1.22z"
					fill="#583BE8"
				/>
				<path
					d="M90.764 130.636c-.269-.331-.298-.816-.067-1.309.355-.78 1.239-1.444 2.045-1.534l2.583-.296c.461-.053.874.09 1.114.395.269.332.298.816.067 1.309-.355.781-1.229 1.444-2.045 1.534l-2.583.296c-.067.009-.125.009-.192.009-.375 0-.71-.143-.922-.404zm3.563-.959c.364-.045.921-.431 1.133-.897.067-.135.067-.224.086-.233-.01 0-.038-.009-.086 0l-2.583.296c-.365.045-.922.43-1.133.897-.068.134-.068.224-.087.233.01 0 .038.009.087 0l2.582-.296z"
					fill="#150035"
				/>
				<path
					d="M69.966 100.969l22.22 27.569-1.21 1.139-22.009-27.219.394-.87.605-.619z"
					fill="#150035"
				/>
				<path
					d="M68.756 102.942l.826-.278c-.01-.018-.125-.413.49-.924l-.577-.61c-.873.717-.873 1.471-.739 1.812zM77.74 98.501l-.977 2.146.804.32.977-2.146-.804-.32zM41.15 91.515a.8.8 0 00.585.26c.039 0 .077 0 .115-.009a.752.752 0 00.596-.43l.778-1.704-.807-.323-.71 1.551-.558.655zM75.255 110.631l-.699.489 11.275 14.063.7-.489-11.276-14.063z"
					fill="#583BE8"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0_299_19277">
					<path
						fill="#fff"
						transform="translate(10.211 13.423)"
						d="M0 0h100.463v83.413H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

const SignalAndTrendsIcon = React.memo(SignalAndTrends);
export default SignalAndTrendsIcon;
