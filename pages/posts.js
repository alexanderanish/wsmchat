import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Posts() {
  return (

    <div>

<div className="p-2 flex justify-center">  

</div>
        <div className="p-2 flex justify-center">  

            <div className="rounded-medium w-[340px] rounded overflow-hidden shadow-lg bg-post-card">

                <div className="pl-2 pr-1 py-4">

                    <div className="mb-0 flex items-center">

                        <img className=" h-[25px] w-[25px] rounded-full"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile Picture"/>
                        <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">john.doe</div>
                        <div className=" pr-1">
                            <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                        </div>
                        <div className=" text-postThrustFontSize font-normal text-thrust-text">1.4k</div>
                        <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Bullish</span>
                        

                        <span className="justify-self-end text-post-time text-postNameFontSize">2 mins ago</span>

                    </div>
                    

                    <div className="pl-8">
                        <span className="inline-block text-white font-medium text-postNameFontSize">Lorem ipsum dolor sit amet, consectetur</span>
                        <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                    </div>
                    
                    <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                        <span className="mr-1">
                                <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                        </span>
                        <span className="flex items-center text-white text-xs ">+1.5K</span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                
                                <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                        </span>

                    </div>

                    <div className="pl-8">
                        <div className="mb-0 flex items-center">

                            <img className=" h-[25px] w-[25px] rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt="Profile Picture"/>
                            <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">michael.G</div>
                            <div className=" pr-1">
                                <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                            </div>
                            <div className=" text-postThrustFontSize font-normal text-thrust-text">1.2k</div>
                            <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Neutral</span>
                            

                            <span className="justify-self-end text-post-time text-postNameFontSize">30 secs ago</span>

                        </div>
                        

                        <div className="pl-8">
                            <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                        </div>
                        
                        <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>

                        <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                            <span className="mr-1">
                                    <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center text-white text-xs ">+1.5K</span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    
                                    <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                            </span>

                        </div>

                    </div>
                    <div className="pl-8">
                        <div className="mb-0 flex items-center">

                            <img className=" h-[25px] w-[25px] rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Profile Picture"/>
                            <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">michell3.G</div>
                            <div className=" pr-1">
                                <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                            </div>
                            <div className=" text-postThrustFontSize font-normal text-thrust-text">1.1k</div>
                            <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Neutral</span>
                            

                            <span className="justify-self-end text-post-time text-postNameFontSize">30 secs ago</span>

                        </div>
                        

                        <div className="pl-8">
                            <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                        </div>
                        
                        <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>

                        <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                            <span className="mr-1">
                                    <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center text-white text-xs ">+1.5K</span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    
                                    <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                            </span>

                        </div>

                    </div>
                    <div className="border-y-2 border-white my-4"></div>

<div className="mb-0 flex items-center">

                        <img className=" h-[25px] w-[25px] rounded-full"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile Picture"/>
                        <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">john.doe</div>
                        <div className=" pr-1">
                            <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                        </div>
                        <div className=" text-postThrustFontSize font-normal text-thrust-text">1.4k</div>
                        <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Bullish</span>
                        

                        <span className="justify-self-end text-post-time text-postNameFontSize">2 mins ago</span>

                    </div>
                    

                    <div className="pl-8">
                        <span className="inline-block text-white font-medium text-postNameFontSize">Lorem ipsum dolor sit amet, consectetur</span>
                        <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                    </div>
                    
                    <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                        <span className="mr-1">
                                <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                        </span>
                        <span className="flex items-center text-white text-xs ">+1.5K</span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                
                                <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                        </span>
                        <span className="flex items-center mx-1 pr-1">
                                <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                        </span>

                    </div>

                    <div className="pl-8">
                        <div className="mb-0 flex items-center">

                            <img className=" h-[25px] w-[25px] rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt="Profile Picture"/>
                            <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">michael.G</div>
                            <div className=" pr-1">
                                <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                            </div>
                            <div className=" text-postThrustFontSize font-normal text-thrust-text">1.2k</div>
                            <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Neutral</span>
                            

                            <span className="justify-self-end text-post-time text-postNameFontSize">30 secs ago</span>

                        </div>
                        

                        <div className="pl-8">
                            <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                        </div>
                        
                        <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>

                        <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                            <span className="mr-1">
                                    <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center text-white text-xs ">+1.5K</span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    
                                    <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                            </span>

                        </div>

                    </div>
                    <div className="pl-8">
                        <div className="mb-0 flex items-center">

                            <img className=" h-[25px] w-[25px] rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Profile Picture"/>
                            <div className=" text-post-name pl-2 pr-2 text-postNameFontSize font-black">michell3.G</div>
                            <div className=" pr-1">
                                <Image src="/images/thurst.svg" alt="thrust rocket" width={10} height={10} />
                            </div>
                            <div className=" text-postThrustFontSize font-normal text-thrust-text">1.1k</div>
                            <span className=" postNameFontSize bg-pill-color rounded-md px-3 py-1 text-postTagFontSize text-white mx-2">Neutral</span>
                            

                            <span className="justify-self-end text-post-time text-postNameFontSize">30 secs ago</span>

                        </div>
                        

                        <div className="pl-8">
                            <span className="inline-block bg-flair-background rounded-full px-2 py-1 text-postTagFontSize text-flair-text ml-1 mb-1">Trades</span>
                        </div>
                        
                        <p className="pl-8 pr-1 text-white font-light text-postNameFontSize">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>

                        <div className="flex items-center pl-8 pr-3 pt-2 mb-2">
                            <span className="mr-1">
                                    <Image src="/images/upVote.svg" alt="Up Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center text-white text-xs ">+1.5K</span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/downVote.svg" alt="Down Vote" width={12.67} height={15.07} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/reply.svg" alt="Reply" width={14.34} height={10.76} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/share.svg" alt="Share" width={13} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    
                                    <Image src="/images/bookmark.svg" alt="Bookmark" width={11} height={13} />
                            </span>
                            <span className="flex items-center mx-1 pr-1">
                                    <Image src="/images/flag.svg" alt="Flag content" width={10.9} height={14.8} />
                            </span>

                        </div>

                    </div>
                </div>
                <div className="my-4 mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post now...."></textarea>
                </div>
            </div>



            
        </div>

    </div>



  )
}