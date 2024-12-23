import React from "react"
import s from './Examples.css'

export default function Examples() {
    let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // setInterval(nextSlide, 3000);
    return (
        <div className="examplespage">
            <div class="slider-container">
                <div class="slides">
                    <div class="slide">
                        <img src="./assets/photo1.jpg" alt="Slide 1"/>
                    </div>
                    <div class="slide">
                        <img src="./assets/photo2.jpg" alt="Slide 2"/>
                    </div>
                </div>
                <button class="button prev" onclick="prevSlide">❮</button>
                <button class="button next" onclick="nextSlide">❯</button>
                </div>
        </div>
    )
}