# Animate.css Cheatsheet for Qwen CLI

## Core Concepts
Animate.css provides ready-to-use CSS animations that can be easily integrated into web projects. All animations require the `animate__animated` class plus a specific animation class.

## Basic Usage
```html
<!-- Simple bounce animation -->
<h1 class="animate__animated animate__bounce">Hello World</h1>

<!-- Fade in with delay -->
<div class="animate__animated animate__fadeIn animate__delay-2s">Fade In</div>

<!-- Infinite pulse animation -->
<div class="animate__animated animate__pulse animate__infinite">Pulse</div>

<!-- Fast shake animation -->
<div class="animate__animated animate__shakeX animate__fast">Shake</div>
```

## Animation Categories

### Attention Seekers
| Class | Description |
|-------|-------------|
| `animate__bounce` | Bounce animation |
| `animate__flash` | Flash animation |
| `animate__pulse` | Pulse animation |
| `animate__rubberBand` | Rubber band effect |
| `animate__shakeX` | Shake horizontally |
| `animate__shakeY` | Shake vertically |
| `animate__headShake` | Head shake animation |
| `animate__swing` | Swing animation |
| `animate__tada` | Tada animation |
| `animate__wobble` | Wobble animation |
| `animate__jello` | Jello animation |
| `animate__heartBeat` | Heart beat animation |

### Back Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__backInDown` | Back in from down |
| `animate__backInLeft` | Back in from left |
| `animate__backInRight` | Back in from right |
| `animate__backInUp` | Back in from up |
| `animate__backOutDown` | Back out to down |
| `animate__backOutLeft` | Back out to left |
| `animate__backOutRight` | Back out to right |
| `animate__backOutUp` | Back out to up |

### Bouncing Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__bounceIn` | Bounce in |
| `animate__bounceInDown` | Bounce in from down |
| `animate__bounceInLeft` | Bounce in from left |
| `animate__bounceInRight` | Bounce in from right |
| `animate__bounceInUp` | Bounce in from up |
| `animate__bounceOut` | Bounce out |
| `animate__bounceOutDown` | Bounce out to down |
| `animate__bounceOutLeft` | Bounce out to left |
| `animate__bounceOutRight` | Bounce out to right |
| `animate__bounceOutUp` | Bounce out to up |

### Fading Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__fadeIn` | Fade in |
| `animate__fadeInDown` | Fade in from down |
| `animate__fadeInDownBig` | Big fade in from down |
| `animate__fadeInLeft` | Fade in from left |
| `animate__fadeInLeftBig` | Big fade in from left |
| `animate__fadeInRight` | Fade in from right |
| `animate__fadeInRightBig` | Big fade in from right |
| `animate__fadeInUp` | Fade in from up |
| `animate__fadeInUpBig` | Big fade in from up |
| `animate__fadeOut` | Fade out |
| `animate__fadeOutDown` | Fade out to down |
| `animate__fadeOutDownBig` | Big fade out to down |
| `animate__fadeOutLeft` | Fade out to left |
| `animate__fadeOutLeftBig` | Big fade out to left |
| `animate__fadeOutRight` | Fade out to right |
| `animate__fadeOutRightBig` | Big fade out to right |
| `animate__fadeOutUp` | Fade out to up |
| `animate__fadeOutUpBig` | Big fade out to up |

### Flippers
| Class | Description |
|-------|-------------|
| `animate__flip` | Flip animation |
| `animate__flipInX` | Flip in X axis |
| `animate__flipInY` | Flip in Y axis |
| `animate__flipOutX` | Flip out X axis |
| `animate__flipOutY` | Flip out Y axis |

### Lightspeed
| Class | Description |
|-------|-------------|
| `animate__lightSpeedInRight` | Light speed in from right |
| `animate__lightSpeedInLeft` | Light speed in from left |
| `animate__lightSpeedOutRight` | Light speed out to right |
| `animate__lightSpeedOutLeft` | Light speed out to left |

### Rotating Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__rotateIn` | Rotate in |
| `animate__rotateInDownLeft` | Rotate in down left |
| `animate__rotateInDownRight` | Rotate in down right |
| `animate__rotateInUpLeft` | Rotate in up left |
| `animate__rotateInUpRight` | Rotate in up right |
| `animate__rotateOut` | Rotate out |
| `animate__rotateOutDownLeft` | Rotate out down left |
| `animate__rotateOutDownRight` | Rotate out down right |
| `animate__rotateOutUpLeft` | Rotate out up left |
| `animate__rotateOutUpRight` | Rotate out up right |

### Specials
| Class | Description |
|-------|-------------|
| `animate__hinge` | Hinge animation |
| `animate__jackInTheBox` | Jack in the box |
| `animate__rollIn` | Roll in |
| `animate__rollOut` | Roll out |

### Zooming Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__zoomIn` | Zoom in |
| `animate__zoomInDown` | Zoom in from down |
| `animate__zoomInLeft` | Zoom in from left |
| `animate__zoomInRight` | Zoom in from right |
| `animate__zoomInUp` | Zoom in from up |
| `animate__zoomOut` | Zoom out |
| `animate__zoomOutDown` | Zoom out to down |
| `animate__zoomOutLeft` | Zoom out to left |
| `animate__zoomOutRight` | Zoom out to right |
| `animate__zoomOutUp` | Zoom out to up |

### Sliding Entrances/Exits
| Class | Description |
|-------|-------------|
| `animate__slideInDown` | Slide in from down |
| `animate__slideInLeft` | Slide in from left |
| `animate__slideInRight` | Slide in from right |
| `animate__slideInUp` | Slide in from up |
| `animate__slideOutDown` | Slide out to down |
| `animate__slideOutLeft` | Slide out to left |
| `animate__slideOutRight` | Slide out to right |
| `animate__slideOutUp` | Slide out to up |

## Speed Classes
| Class | Description | Duration |
|-------|-------------|----------|
| `animate__slow` | Slow animation | 2s |
| `animate__slower` | Slower animation | 3s |
| `animate__fast` | Fast animation | 800ms |
| `animate__faster` | Faster animation | 500ms |

## Delay Classes
| Class | Description | Delay |
|-------|-------------|-------|
| `animate__delay-1s` | 1 second delay | 1s |
| `animate__delay-2s` | 2 second delay | 2s |
| `animate__delay-3s` | 3 second delay | 3s |
| `animate__delay-4s` | 4 second delay | 4s |
| `animate__delay-5s` | 5 second delay | 5s |

## Repeat Classes
| Class | Description | Repeats |
|-------|-------------|---------|
| `animate__repeat-1` | Repeat 1 time | 1 |
| `animate__repeat-2` | Repeat 2 times | 2 |
| `animate__repeat-3` | Repeat 3 times | 3 |
| `animate__infinite` | Infinite repeat | ∞ |

## CSS Custom Properties
Control animations through CSS variables:
```css
/* Change duration */
.element {
  --animate-duration: 0.5s;
}

/* Change delay */
.element {
  --animate-delay: 1s;
}

/* Change repeat count */
.element {
  --animate-repeat: 3;
}
```

## JavaScript Integration
```javascript
// Add animation classes
element.classList.add('animate__animated', 'animate__bounceOutLeft');

// Detect animation end
element.addEventListener('animationend', () => {
  // Do something after animation completes
});

// Change duration
element.style.setProperty('--animate-duration', '0.5s');
```

## Common Patterns for HTMX + Hyperscript Projects

### Trigger Animation on Load
```html
<div class="animate__animated animate__fadeIn" 
     hx-get="/data" 
     hx-trigger="load delay:500ms">
</div>
```

### Animate on HTMX Swap
```html
<div _="on htmx:afterSwap 
       add .animate__animated.animate__fadeIn to #new-content">
  <div id="new-content" hx-get="/data"></div>
</div>
```

### Button Click Animation
```html
<button _="on click 
         add .animate__animated.animate__pulse to me 
         wait for animationend 
         remove .animate__pulse">
  Click Me
</button>
```

### Form Submission Animation
```html
<form hx-post="/submit" 
      _="on htmx:beforeRequest 
         add .animate__animated.animate__fadeOut to #form-content
         on htmx:afterRequest 
         add .animate__animated.animate__fadeIn to #form-content">
  <div id="form-content">
    <!-- Form fields -->
  </div>
</form>
```

## Best Practices

1. **Meaningful Animations**: Use purposefully to guide attention or signal transitions
2. **Avoid Large Elements**: Animating large elements degrades performance
3. **Don't Animate Root Elements**: Wrap content instead
4. **Limit Infinite Animations**: Can distract/annoy users
5. **Respect Prefers-Reduced-Motion**: 
```css
@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This cheatsheet provides a quick reference for all essential animate.css functionality that can be used with Qwen CLI in the HTMX + Hyperscript + TailwindCSS UI Library project.