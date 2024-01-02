'use client'

import {
    motion,
    useInView,
    useAnimation,
    useScroll,
    useTransform,
    AnimatePresence,
} from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface Props {
    children: JSX.Element
    width?: 'fit-content' | '100%'
}

export const SectionReveal = ({ children }: Props) => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            console.log(isInView)
        }
    }, [isInView, mainControls])

    return (
        <motion.section
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
            {children}
        </motion.section>
    )
}

export const ListReveal = ({ children, width = '100%' }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            console.log(isInView)
        }
    }, [isInView, mainControls])

    return (
        <div
            ref={ref}
            style={{ position: 'relative', width, overflow: 'hidden' }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
