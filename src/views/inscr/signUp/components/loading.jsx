function Example() {
    // Via instantiation
    const toast = useToast({
      position: 'top',
      title: 'Container style is updated',
      containerStyle: {
        width: '100px',
        maxWidth: '100%',
      },
    })
    // Or via trigger
    // Style here will overwrite the entire style above
    return (
      
      <Button
        position: top
        onClick={() => {
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 5000)
          })
  
          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: { title: 'Promise resolved', description: 'Looks great' },
            error: { title: 'Promise rejected', description: 'Something wrong' },
            loading: { title: 'Promise pending', description: 'Please wait' },
          })
        }}
      >
        Show Toast
      </Button>
    )
  }